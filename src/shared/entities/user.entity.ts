import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserChallenges } from './user_challenges.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserChallenges, (userChallenges) => userChallenges.users)
  userChallenges: UserChallenges[];
}
