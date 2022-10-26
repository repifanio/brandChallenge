import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenge } from '../entity/challenge.entity';

@Injectable()
export class ListChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}

  async run(): Promise<Challenge[]> {
    try {
      return await this.challengeRepository.findBy({ isActive: true });
    } catch (err) {
      return err.code;
    }
  }
}
