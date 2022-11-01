import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDto } from '../dto/activity.dto';
import { Activity } from '../../shared/entities/activity.entity';

@Injectable()
export class InsertActivity {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async run(newActivity: ActivityDto): Promise<Activity> {
    const activity = new Activity();
    activity.activityName = newActivity.activityName;
    activity.startAt = newActivity.startAt;
    activity.endAt = newActivity.endAt;
    activity.isActive = newActivity.isActive;
    activity.maxSpeed = newActivity.maxSpeed;
    activity.avgSpeed = newActivity.avgSpeed;
    activity.distance = newActivity.distance;
    activity.altimetry = newActivity.altimetry;
    activity.maxCadence = newActivity.maxCadence;
    activity.avgCadence = newActivity.avgCadence;
    activity.maxWatts = newActivity.maxWatts;
    activity.avgWatts = newActivity.avgWatts;
    activity.userId = newActivity.userId;

    try {
      return await this.activityRepository.save(activity);
    } catch (err) {
      return err.code;
    }
  }
}
