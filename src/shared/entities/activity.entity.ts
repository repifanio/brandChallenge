import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activityName: string;

  @Column()
  startAt: Date;

  @Column()
  endAt: Date;

  @Column()
  isActive: boolean;

  @Column()
  maxSpeed: number;

  @Column()
  avgSpeed: number;

  @Column()
  distance: number;

  @Column()
  altimetry: number;

  @Column()
  maxCadence: number;

  @Column()
  avgCadence: number;

  @Column()
  maxWatts: number;

  @Column()
  avgWatts: number;

  @Column()
  userId: number;
}
