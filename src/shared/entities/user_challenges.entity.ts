import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Challenge } from './challenge.entity';
import { Users } from './user.entity';

@Entity()
export class UserChallenges {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.challengeActivities)
  challenge: Challenge;

  @ManyToOne(() => Users, (users) => users.userChallenges)
  users: Users;
}
