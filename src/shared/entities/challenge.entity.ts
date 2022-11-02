import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Challenger } from './challenger.entity';
import { ChallengeRequirements } from './challenge_requirements.entity';
import { ActivitiesChallenges } from './activities_challenge.entity';
import { UserChallenges } from './user_challenges.entity';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  challengeName: string;

  @Column()
  startAt: Date;

  @Column()
  endAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Challenger, (challenger) => challenger.challenges)
  challenger: Challenger;

  @OneToMany(
    () => ChallengeRequirements,
    (challengeRequriments) => challengeRequriments.challenge,
  )
  challengeRequirements: ChallengeRequirements[];

  @OneToMany(
    () => ActivitiesChallenges,
    (activitiesChallenge) => activitiesChallenge.challenge,
  )
  challengeActivities: ActivitiesChallenges[];

  @OneToMany(() => UserChallenges, (userChallenges) => userChallenges.challenge)
  userChallenges: UserChallenges[];
}
