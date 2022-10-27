import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenge } from '../../shared/entities/challenge.entity';

@Injectable()
export class InactiveChallenge {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}

  async run(challengeId: number): Promise<Challenge> {
    const challengeFind = await this.challengeRepository.findOneBy({
      id: challengeId,
    });
    challengeFind.isActive = false;
    challengeFind.updatedAt = new Date();

    try {
      return await this.challengeRepository.save(challengeFind);
    } catch (err) {
      return err.code;
    }
  }
}
