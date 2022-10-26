import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChallengeDto } from '../dto/challenge.dto';
import { Challenger } from '../../challenger/entity/challenger.entity';
import { Challenge } from '../entity/challenge.entity';

@Injectable()
export class InsertChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengerRepository: Repository<Challenge>,
  ) {}

  async run(
    challenger: Challenger,
    createChallengeDto: ChallengeDto,
  ): Promise<Challenge> {
    const challenge = new Challenge();
    challenge.challengeName = createChallengeDto.challengeName;
    challenge.startAt = createChallengeDto.startAt;
    challenge.endAt = createChallengeDto.endAt;
    challenge.isActive = createChallengeDto.isActive;
    challenge.challenger = challenger;
    challenge.createdAt = new Date();

    try {
      return await this.challengerRepository.save(challenge);
    } catch (err) {
      return err;
    }
  }
}
