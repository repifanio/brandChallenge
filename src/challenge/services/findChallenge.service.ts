import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenge } from '../entity/challenge.entity';

@Injectable()
export class FindChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}

  async run(challengeId: number): Promise<Challenge> {
    try {
      return await this.challengeRepository.findOneBy({
        id: challengeId,
      });
    } catch (err) {
      return err.code;
    }
  }
}
