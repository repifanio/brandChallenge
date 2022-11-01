import { Body, Controller, Post, Put, Param, Get } from '@nestjs/common';
import { ActivityDto } from '../activities/dto/activity.dto';
import { InsertActivity } from './services/insertActivity.service';
import { Activity } from '../shared/entities/activity.entity';

@Controller('/activity')
export class ActivityController {
  constructor(private readonly insertActivity: InsertActivity) {}

  @Post('/create')
  create(@Body() activity: ActivityDto): Promise<Activity> {
    return this.insertActivity.run(activity);
  }
}
