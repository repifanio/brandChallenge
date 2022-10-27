import { RequirementsDto } from './requirements.dto';

export class ChallengeDto {
  id?: number;
  challengeName: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
  createdAt: Date;
  requirements?: RequirementsDto[];
}

export class HeaderChallengeDto {
  challengerId: number;
}
