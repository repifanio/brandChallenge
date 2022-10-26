import { Module } from '@nestjs/common';
import { ChallengeController } from './challenge.controller';
import { InsertChallenge } from './services/insertChallenge.service';
import { FindChallenger } from '../challenger/services/findChallenger.service';
import { EditChallenge } from './services/editChallenge.service';
import { InactiveChallenge } from './services/inactiveChallenge.service';
import { ListChallenge } from './services/listChallenge.service';
import { FindChallenge } from './services/findChallenge.service';
import { Challenge } from './entity/challenge.entity';
import { Challenger } from '../challenger/entity/challenger.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Challenge, Challenger])],
  providers: [
    InsertChallenge,
    FindChallenger,
    EditChallenge,
    InactiveChallenge,
    ListChallenge,
    FindChallenge,
  ],
  controllers: [ChallengeController],
})
export class ChallengeModule {}
