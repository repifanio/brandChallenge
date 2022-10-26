import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenger } from '../entity/challenger.entity';

@Injectable()
export class FindChallenger {
  constructor(
    @InjectRepository(Challenger)
    private challengerRepository: Repository<Challenger>,
  ) {}

  async run(challengerId: number): Promise<Challenger> {
    try {
      return await this.challengerRepository.findOneBy({
        id: challengerId,
      });
    } catch (err) {
      return err.code;
    }
  }
}
