import {
  Body,
  Controller,
  Post,
  Headers,
  Param,
  Put,
  Get,
} from '@nestjs/common';
import { FindChallenger } from '../challenger/services/findChallenger.service';
import { InsertChallenge } from './services/insertChallenge.service';
import { EditChallenge } from './services/editChallenge.service';
import { InactiveChallenge } from './services/inactiveChallenge.service';
import { ListChallenge } from './services/listChallenge.service';
import { FindChallenge } from './services/findChallenge.service';
import { ChallengeDto, HeaderChallengeDto } from './dto/challenge.dto';
import { Challenge } from '../shared/entities/challenge.entity';
import { ReturnChallenge } from './dto/returnChallenge.dto';
import { ListChallengeDto } from './dto/listChallenge.dto';

@Controller('/challenge')
export class ChallengeController {
  constructor(
    private readonly insertChallenge: InsertChallenge,
    private readonly findChallenger: FindChallenger,
    private readonly editChallenge: EditChallenge,
    private readonly inactiveChallenge: InactiveChallenge,
    private readonly findChallenge: FindChallenge,
    private readonly listChallenge: ListChallenge,
  ) {}

  @Post('/create')
  async create(
    @Headers() headers: HeaderChallengeDto,
    @Body() createChallengeDto: ChallengeDto,
  ): Promise<ReturnChallenge> {
    const { challengerId: number } = headers;
    const challenger = await this.findChallenger.run(2);

    return this.insertChallenge.run(challenger, createChallengeDto);
  }

  @Put('/update/:challengeId')
  async update(
    @Param('challengeId') challengeId: number,
    @Body() createChallengeDto: ChallengeDto,
  ): Promise<Challenge> {
    return this.editChallenge.run(challengeId, createChallengeDto);
  }

  @Put('/inactive/:challengeId')
  inactive(@Param('challengeId') challengeId: number): Promise<Challenge> {
    return this.inactiveChallenge.run(challengeId);
  }

  @Get('/find/:challengeId')
  find(@Param('challengeId') challengeId: number): Promise<ListChallengeDto> {
    return this.findChallenge.run(challengeId);
  }

  @Get('/list')
  list(): Promise<ListChallengeDto[]> {
    return this.listChallenge.run();
  }

  @Get('/list-by-user/:userId')
  listByUser(@Param('userId') userId: number): Promise<ListChallengeDto[]> {
    return this.listChallenge.run(userId);
  }
}
