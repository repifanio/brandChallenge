import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDto } from '../dto/activity.dto';
import { Activity } from '../../shared/entities/activity.entity';

@Injectable()
export class EditActivity {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async run(activityId: number, newActivity: ActivityDto): Promise<Activity> {
    const ActivityFind = await this.activityRepository.findOneBy({
      id: activityId,
    });

    ActivityFind.activityName = newActivity.activityName;
    ActivityFind.startAt = newActivity.startAt;
    ActivityFind.endAt = newActivity.endAt;
    ActivityFind.isActive = newActivity.isActive;
    ActivityFind.maxSpeed = newActivity.maxSpeed;
    ActivityFind.avgSpeed = newActivity.avgSpeed;
    ActivityFind.distance = newActivity.distance;
    ActivityFind.altimetry = newActivity.altimetry;
    ActivityFind.maxCadence = newActivity.maxCadence;
    ActivityFind.avgCadence = newActivity.avgCadence;
    ActivityFind.maxWatts = newActivity.maxWatts;
    ActivityFind.avgWatts = newActivity.avgWatts;
    ActivityFind.userId = newActivity.userId;

    try {
      return await this.activityRepository.save(ActivityFind);
    } catch (err) {
      return err.code;
    }
  }
}
