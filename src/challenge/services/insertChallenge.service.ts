import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChallengeDto } from '../dto/challenge.dto';
import { ReturnNewChallenge } from '../dto/returnNewChallenge.dto';
import { Challenger } from '../../shared/entities/challenger.entity';
import { Challenge } from '../../shared/entities/challenge.entity';
import { ChallengeRequirements } from '../../shared/entities/challenge_requirements.entity';
import { InsertChallengeRequirements } from '../services/insertChallengeRequiriments.service';

@Injectable()
export class InsertChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengerRepository: Repository<Challenge>,
    @InjectRepository(ChallengeRequirements)
    private challengeRequirementsRepository: Repository<ChallengeRequirements>,
  ) {}

  async run(
    challenger: Challenger,
    createChallenge: ChallengeDto,
  ): Promise<ReturnNewChallenge> {
    const challenge = new Challenge();

    try {
      challenge.challengeName = createChallenge.challengeName;
      challenge.startAt = createChallenge.startAt;
      challenge.endAt = createChallenge.endAt;
      challenge.isActive = createChallenge.isActive;
      challenge.challenger = challenger;
      challenge.createdAt = new Date();
      const newChallenge = await this.challengerRepository.save(challenge);

      const insertChallengeRequirements = new InsertChallengeRequirements(
        this.challengeRequirementsRepository,
      );
      await insertChallengeRequirements.run(
        createChallenge.requirements,
        newChallenge,
      );

      return {
        challenge: newChallenge,
        requirements: createChallenge.requirements,
      };
    } catch (err) {
      return err;
    }
  }
}
