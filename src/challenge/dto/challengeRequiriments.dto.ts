import { Requirements } from '../../shared/entities/requirements.entity';
import { Challenge } from '../../shared/entities/challenge.entity';

export class challengeRequirementsDto {
  requirements: Requirements;
  challenge: Challenge;
  value: number;
}
