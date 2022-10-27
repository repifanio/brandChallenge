import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ChallengeRequirements } from './challenge_requirements.entity';

@Entity()
export class Requirements {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requirement: string;

  @OneToMany(
    () => ChallengeRequirements,
    (challengeRequriments) => challengeRequriments.requirements,
  )
  challengeRequirements: ChallengeRequirements[];
}
