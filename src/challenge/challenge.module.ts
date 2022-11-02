import { Module } from '@nestjs/common';
import { ChallengeController } from './challenge.controller';
import { InsertChallenge } from './services/insertChallenge.service';
import { FindChallenger } from '../challenger/services/findChallenger.service';
import { EditChallenge } from './services/editChallenge.service';
import { InactiveChallenge } from './services/inactiveChallenge.service';
import { ListChallenge } from './services/listChallenge.service';
import { FindChallenge } from './services/findChallenge.service';
import { Challenge } from '../shared/entities/challenge.entity';
import { Challenger } from '../shared/entities/challenger.entity';
import { Requirements } from '../shared/entities/requirements.entity';
import { ChallengeRequirements } from '../shared/entities/challenge_requirements.entity';
import { Users } from '../shared/entities/user.entity';
import { UserChallenges } from '../shared/entities/user_challenges.entity';
import { ActivitiesChallenges } from '../shared/entities/activities_challenge.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Challenge,
      Challenger,
      ChallengeRequirements,
      Requirements,
      Users,
      UserChallenges,
      ActivitiesChallenges,
    ]),
  ],
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
