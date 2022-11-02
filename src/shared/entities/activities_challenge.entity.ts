import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Challenge } from './challenge.entity';
import { Activity } from './activity.entity';

@Entity()
export class ActivitiesChallenges {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.challengeActivities)
  challenge: Challenge;

  @ManyToOne(() => Activity, (activity) => activity.challengeActivities)
  activities: Activity;
}
