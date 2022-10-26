import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenger } from '../entity/challenger.entity';

@Injectable()
export class InactiveChallenger {
  constructor(
    @InjectRepository(Challenger)
    private challengerRepository: Repository<Challenger>,
  ) {}

  async run(challengerId: number): Promise<Challenger> {
    const challengerFind = await this.challengerRepository.findOneBy({
      id: challengerId,
    });
    challengerFind.isActive = false;
    challengerFind.updatedAt = new Date();

    try {
      return await this.challengerRepository.save(challengerFind);
    } catch (err) {
      return err.code;
    }
  }
}
