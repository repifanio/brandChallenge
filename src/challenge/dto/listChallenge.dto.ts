import { RequirementsDto } from './requirements.dto';

export class ListChallengeDto {
  id: number;
  challengeName: string;
  startAt: string;
  endAt: string;
  requirements?: RequirementsDto[];
}
