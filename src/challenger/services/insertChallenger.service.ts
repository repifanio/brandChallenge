import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChallengerDto } from '../dto/challenger.dto';
import { Challenger } from '../entity/challenger.entity';

@Injectable()
export class InsertChallenger {
  constructor(
    @InjectRepository(Challenger)
    private challengerRepository: Repository<Challenger>,
  ) {}

  async run(createChallengerDto: ChallengerDto): Promise<Challenger> {
    const challenger = new Challenger();
    challenger.document = createChallengerDto.document;
    challenger.legalName = createChallengerDto.legalName;
    challenger.fantasyName = createChallengerDto.fantasyName;
    challenger.isActive = createChallengerDto.isActive;
    challenger.createdAt = new Date();

    try {
      return await this.challengerRepository.save(challenger);
    } catch (err) {
      return err.code;
    }
  }
}
