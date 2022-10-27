import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequirementsDto } from '../dto/requirements.dto';
import { Challenge } from '../../shared/entities/challenge.entity';
import { ChallengeRequirements } from '../../shared/entities/challenge_requirements.entity';
import { Requirements } from '../../shared/entities/requirements.entity';
import { challengeRequirementsDto } from '../dto/challengeRequiriments.dto';

@Injectable()
export class InsertChallengeRequirements {
  constructor(
    @InjectRepository(ChallengeRequirements)
    private challengeRequirementsRepository: Repository<ChallengeRequirements>,
  ) {}

  async run(
    requirements: RequirementsDto[],
    challenge: Challenge,
  ): Promise<void> {
    const requirementsArray: challengeRequirementsDto[] = [];
    try {
      for (const requirement of requirements) {
        requirementsArray.push({
          challenge: challenge,
          requirements: {
            id: requirement.id,
            requirement: requirement.requirement,
          } as Requirements,
          value: requirement.value,
        });
      }

      await this.challengeRequirementsRepository.save(requirementsArray);
    } catch (err) {
      return err;
    }
  }
}
