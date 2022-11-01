import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from '../../shared/entities/activity.entity';

@Injectable()
export class ListActivity {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async run(): Promise<Activity[]> {
    try {
      return await this.activityRepository.findBy({ isActive: true });
    } catch (err) {
      return err.code;
    }
  }
}
