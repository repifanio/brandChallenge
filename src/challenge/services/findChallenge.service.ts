import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenge } from '../../shared/entities/challenge.entity';
import { ListChallengeDto } from '../dto/listChallenge.dto';
import { ConvertQueryResultToJson } from '../../shared/services/convertQueryResult.service';

@Injectable()
export class FindChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}

  async run(challengeId: number): Promise<ListChallengeDto> {
    const convertQueryResult = new ConvertQueryResultToJson();
    let challengeToReturn: ListChallengeDto;

    try {
      const challengesFormatted: ListChallengeDto[] = convertQueryResult.run(
        await this.challengeRepository.query(
          `select c.id, c.challengeName, c.startAt, c.endAt from challenge c where c.id = ${challengeId}`,
        ),
      );

      challengeToReturn = challengesFormatted[0];
      challengeToReturn.requirements = convertQueryResult.run(
        await this.challengeRepository.query(
          `Select r.id, r.requirement, cr.value from challenge_requirements cr, requirements r where cr.requirementsId = r.id and cr.challengeId = ${challengeId}`,
        ),
      );

      return challengeToReturn;
    } catch (err) {
      return err.code;
    }
  }
}
