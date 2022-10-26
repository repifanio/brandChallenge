import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Challenger } from '../../challenger/entity/challenger.entity';

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
}
