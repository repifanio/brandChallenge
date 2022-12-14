import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenge } from '../../shared/entities/challenge.entity';
import { ListChallengeDto } from '../dto/listChallenge.dto';
import { ConvertQueryResultToJson } from '../../shared/services/convertQueryResult.service';

@Injectable()
export class ListChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}

  async run(userId = 0): Promise<ListChallengeDto[]> {
    const convertQueryResult = new ConvertQueryResultToJson();
    const allChallenges: ListChallengeDto[] = [];

    try {
      let challengeToReturn: ListChallengeDto;

      const challengeQuery =
        userId === 0
          ? 'select c.id, c.challengeName, c.startAt, c.endAt from challenge c'
          : `select 
                c.id, c.challengeName, c.startAt, c.endAt 
             from 
                challenge c, user_challenges uc, users u 
             where c.id = uc.challengeId 
                and u.id = uc.usersId 
                and u.id = ${userId}`;

      const challengesFormatted: ListChallengeDto[] = convertQueryResult.run(
        await this.challengeRepository.query(challengeQuery),
      );

      for (const challenge of challengesFormatted) {
        challengeToReturn = challenge;

        challengeToReturn.requirements = convertQueryResult.run(
          await this.challengeRepository.query(
            `Select r.id, r.requirement, cr.value from challenge_requirements cr, requirements r where cr.requirementsId = r.id and cr.challengeId = ${challenge.id}`,
          ),
        );

        allChallenges.push(challengeToReturn);
      }

      return allChallenges;
    } catch (err) {
      return err.code;
    }
  }
}
