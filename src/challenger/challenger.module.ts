import { Module } from '@nestjs/common';
import { ChallengerController } from './challenger.controller';
import { InsertChallenger } from './services/insertChallenger.service';
import { EditChallenger } from './services/editChallenger.service';
import { InactiveChallenger } from './services/inativeChallenger.service';
import { FindChallenger } from './services/findChallenger.service';
import { ListChallenger } from './services/listChallenger.service';
import { Challenger } from '../shared/entities/challenger.entity';
import { Requirements } from '../shared/entities/requirements.entity';
import { ChallengeRequirements } from '../shared/entities/challenge_requirements.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Challenger, Requirements, ChallengeRequirements]),
  ],
  providers: [
    InsertChallenger,
    EditChallenger,
    InactiveChallenger,
    FindChallenger,
    ListChallenger,
  ],
  controllers: [ChallengerController],
})
export class ChallengerModule {}
