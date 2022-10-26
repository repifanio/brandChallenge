import { Module } from '@nestjs/common';
import { ChallengeController } from './challenge.controller';
import { InsertChallenge } from './services/insertChallenge.service';
import { FindChallenger } from '../challenger/services/findChallenger.service';
import { Challenge } from './entity/challenge.entity';
import { Challenger } from '../challenger/entity/challenger.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Challenge, Challenger])],
  providers: [InsertChallenge, FindChallenger],
  controllers: [ChallengeController],
})
export class ChallengeModule {}
