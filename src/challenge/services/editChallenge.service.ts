import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChallengeDto } from '../dto/challenge.dto';
import { Challenger } from '../../shared/entities/challenger.entity';
import { Challenge } from '../../shared/entities/challenge.entity';
import { InsertChallengeRequirements } from '../services/insertChallengeRequiriments.service';
import { RemoveChallengeRequirements } from '../services/removeChallengeRequeriments.service';
import { ChallengeRequirements } from '../../shared/entities/challenge_requirements.entity';

@Injectable()
export class EditChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
    @InjectRepository(ChallengeRequirements)
    private challengeRequirementsRepository: Repository<ChallengeRequirements>,
  ) {}

  async run(
    challengeId: number,
    challengeUpdate: ChallengeDto,
  ): Promise<Challenge> {
    const challenge = new Challenge();

    const challengeFind = await this.challengeRepository.findOneBy({
      id: challengeId,
    });

    challengeFind.challengeName = challengeUpdate.challengeName;
    challengeFind.startAt = challengeUpdate.startAt;
    challengeFind.endAt = challengeUpdate.endAt;
    challengeFind.isActive = challengeUpdate.isActive;
    challengeFind.updatedAt = new Date();

    if (challengeUpdate.requirements) {
      const removeChallengeRequirements = new RemoveChallengeRequirements(
        this.challengeRequirementsRepository,
      );

      const insertChallengeRequirements = new InsertChallengeRequirements(
        this.challengeRequirementsRepository,
      );

      await removeChallengeRequirements.run(challengeFind);
      await insertChallengeRequirements.run(
        challengeUpdate.requirements,
        challengeFind,
      );
    }

    try {
      return await this.challengeRepository.save(challengeFind);
    } catch (err) {
      return err;
    }
  }
}
