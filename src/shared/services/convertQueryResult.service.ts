import { Injectable } from '@nestjs/common';
import { ListChallengeDto } from '../../challenge/dto/listChallenge.dto';

@Injectable()
export class ConvertQueryResultToJson {
  run(queryResult: any): any {
    const result: ListChallengeDto[] = Object.values(
      JSON.parse(JSON.stringify(queryResult)),
    );

    return result;
  }
}
