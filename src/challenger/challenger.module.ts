import { Module } from '@nestjs/common';
import { ChallengerController } from './challenger.controller';
import { InsertChallenger } from './services/insertChallenger.service';
import { EditChallenger } from './services/editChallenger.service';
import { InactiveChallenger } from './services/inativeChallenger.service';
import { FindChallenger } from './services/findChallenger.service';
import { ListChallenger } from './services/listChallenger.service';
import { Challenger } from './entity/challenger.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Challenger])],
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
