import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
