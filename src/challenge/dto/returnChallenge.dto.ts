import { Challenge } from '../../shared/entities/challenge.entity';
import { RequirementsDto } from './requirements.dto';

export class ReturnChallenge {
  challenge: Challenge;
  requirements: RequirementsDto[];
}
