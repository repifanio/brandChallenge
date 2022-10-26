import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Challenge } from '../../challenge/entity/challenge.entity';

@Entity()
export class Challenger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  document: string;

  @Column()
  legalName: string;

  @Column()
  fantasyName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Challenge, (challenge) => challenge.challenger)
  challenges: Challenger[];
}
