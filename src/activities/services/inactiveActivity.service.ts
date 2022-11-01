import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDto } from '../dto/activity.dto';
import { Activity } from '../../shared/entities/activity.entity';

@Injectable()
export class InactiveActivity {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async run(activityId: number): Promise<Activity> {
    const ActivityFind = await this.activityRepository.findOneBy({
      id: activityId,
    });

    ActivityFind.isActive = false;

    try {
      return await this.activityRepository.save(ActivityFind);
    } catch (err) {
      return err.code;
    }
  }
}
