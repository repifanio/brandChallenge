import { Body, Controller, Post, Put, Param, Get } from '@nestjs/common';
import { InsertChallenger } from './services/insertChallenger.service';
import { EditChallenger } from './services/editChallenger.service';
import { InactiveChallenger } from './services/inativeChallenger.service';
import { FindChallenger } from './services/findChallenger.service';
import { ListChallenger } from './services/listChallenger.service';
import { ChallengerDto } from './dto/challenger.dto';
import { Challenger } from './entity/challenger.entity';

@Controller('/challenger')
export class ChallengerController {
  constructor(
    private readonly insertChallenger: InsertChallenger,
    private readonly editChallenger: EditChallenger,
    private readonly inactiveChallenger: InactiveChallenger,
    private readonly findChallenger: FindChallenger,
    private readonly listChallenger: ListChallenger,
  ) {}

  @Post('/create')
  create(@Body() createChallengerDto: ChallengerDto): Promise<Challenger> {
    return this.insertChallenger.run(createChallengerDto);
  }

  @Put('/update/:challengerId')
  update(
    @Param('challengerId') challengerId: number,
    @Body() editChallengerDto: ChallengerDto,
  ): Promise<Challenger> {
    return this.editChallenger.run(challengerId, editChallengerDto);
  }

  @Put('/inactive/:challengerId')
  inactive(@Param('challengerId') challengerId: number): Promise<Challenger> {
    return this.inactiveChallenger.run(challengerId);
  }

  @Get('/find/:challengerId')
  find(@Param('challengerId') challengerId: number): Promise<Challenger> {
    return this.findChallenger.run(challengerId);
  }

  @Get('/list')
  list(): Promise<Challenger[]> {
    return this.listChallenger.run();
  }
}
