import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChallengeDto } from '../dto/challenge.dto';
import { Challenger } from '../../challenger/entity/challenger.entity';
import { Challenge } from '../entity/challenge.entity';

@Injectable()
export class EditChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}

  async run(
    challengeId: number,
    challengeDto: ChallengeDto,
  ): Promise<Challenge> {
    const challenge = new Challenge();

    const challengeFind = await this.challengeRepository.findOneBy({
      id: challengeId,
    });

    challengeFind.challengeName = challengeDto.challengeName;
    challengeFind.startAt = challengeDto.startAt;
    challengeFind.endAt = challengeDto.endAt;
    challengeFind.isActive = challengeDto.isActive;
    challengeFind.updatedAt = new Date();

    try {
      return await this.challengeRepository.save(challengeFind);
    } catch (err) {
      return err;
    }
  }
}
