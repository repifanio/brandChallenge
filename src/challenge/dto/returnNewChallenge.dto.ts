import { Challenge } from '../../shared/entities/challenge.entity';
import { RequirementsDto } from './requirements.dto';

export class ReturnNewChallenge {
  challenge: Challenge;
  requirements: RequirementsDto[];
}
