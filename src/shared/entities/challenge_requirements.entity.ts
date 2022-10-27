import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Challenge } from './challenge.entity';
import { Requirements } from './requirements.entity';

@Entity()
export class ChallengeRequirements {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.challengeRequirements)
  challenge: Challenge;

  @ManyToOne(
    () => Requirements,
    (requirements) => requirements.challengeRequirements,
  )
  requirements: Requirements;
}
