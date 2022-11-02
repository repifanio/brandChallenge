import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ActivitiesChallenges } from './activities_challenge.entity';

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

  @OneToMany(
    () => ActivitiesChallenges,
    (activitiesChallenges) => activitiesChallenges.activities,
  )
  challengeActivities: ActivitiesChallenges[];
}
