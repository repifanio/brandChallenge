import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from '../../shared/entities/activity.entity';

@Injectable()
export class FindActivity {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async run(activityId: number): Promise<Activity> {
    try {
      return await this.activityRepository.findOneBy({
        id: activityId,
      });
    } catch (err) {
      return err.code;
    }
  }
}
