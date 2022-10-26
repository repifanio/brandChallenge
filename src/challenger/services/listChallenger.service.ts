import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenger } from '../entity/challenger.entity';

@Injectable()
export class ListChallenger {
  constructor(
    @InjectRepository(Challenger)
    private challengerRepository: Repository<Challenger>,
  ) {}

  async run(): Promise<Challenger[]> {
    try {
      return await this.challengerRepository.findBy({ isActive: true });
    } catch (err) {
      return err.code;
    }
  }
}
