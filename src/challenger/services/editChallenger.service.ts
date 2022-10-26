import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChallengerDto } from '../dto/challenger.dto';
import { Challenger } from '../entity/challenger.entity';

@Injectable()
export class EditChallenger {
  constructor(
    @InjectRepository(Challenger)
    private challengerRepository: Repository<Challenger>,
  ) {}

  async run(
    challengerId: number,
    createChallengerDto: ChallengerDto,
  ): Promise<Challenger> {
    const challenger = new Challenger();

    const challengerFind = await this.challengerRepository.findOneBy({
      id: challengerId,
    });

    challengerFind.document = createChallengerDto.document;
    challengerFind.legalName = createChallengerDto.legalName;
    challengerFind.fantasyName = createChallengerDto.fantasyName;
    challengerFind.isActive = createChallengerDto.isActive;
    challengerFind.updatedAt = new Date();

    try {
      return await this.challengerRepository.save(challengerFind);
    } catch (err) {
      return err.code;
    }
  }
}
