export class ChallengeDto {
  challengeName: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
  createdAt: Date;
}

export class HeaderChallengeDto {
  challengerId: number;
}
