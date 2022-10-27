import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequirementsDto } from '../dto/requirements.dto';
import { Challenge } from '../../shared/entities/challenge.entity';
import { ChallengeRequirements } from '../../shared/entities/challenge_requirements.entity';
import { Requirements } from '../../shared/entities/requirements.entity';
import { challengeRequirementsDto } from '../dto/challengeRequiriments.dto';

@Injectable()
export class RemoveChallengeRequirements {
  constructor(
    @InjectRepository(ChallengeRequirements)
    private challengeRequirementsRepository: Repository<ChallengeRequirements>,
  ) {}

  async run(challenge: Challenge): Promise<void> {
    try {
      await this.challengeRequirementsRepository.delete({
        challenge: challenge,
      });
    } catch (err) {
      return err;
    }
  }
}
