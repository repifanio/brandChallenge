import { Body, Controller, Post, Headers } from '@nestjs/common';
import { FindChallenger } from '../challenger/services/findChallenger.service';
import { InsertChallenge } from './services/insertChallenge.service';
import { ChallengeDto, HeaderChallengeDto } from './dto/challenge.dto';
import { Challenge } from './entity/challenge.entity';

@Controller('/challenge')
export class ChallengeController {
  constructor(
    private readonly insertChallenge: InsertChallenge,
    private readonly findChallenger: FindChallenger,
  ) {}

  @Post('/create')
  async create(
    @Headers() headers: HeaderChallengeDto,
    @Body() createChallengeDto: ChallengeDto,
  ): Promise<Challenge> {
    const { challengerId: number } = headers;
    const challenger = await this.findChallenger.run(2);

    return this.insertChallenge.run(challenger, createChallengeDto);
  }
}
