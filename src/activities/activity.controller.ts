import { Body, Controller, Post, Put, Param, Get } from '@nestjs/common';
import { ActivityDto } from '../activities/dto/activity.dto';
import { InsertActivity } from './services/insertActivity.service';
import { Activity } from '../shared/entities/activity.entity';
import { EditActivity } from '../activities/services/editActivity.service';
import { InactiveActivity } from '../activities/services/inactiveActivity.service';
import { ListActivity } from './services/listActivities.service';
import { FindActivity } from './services/findActivity.service';

@Controller('/activity')
export class ActivityController {
  constructor(
    private readonly insertActivity: InsertActivity,
    private readonly editActivity: EditActivity,
    private readonly inactiveActivity: InactiveActivity,
    private readonly listActivity: ListActivity,
    private readonly findActivity: FindActivity,
  ) {}

  @Post('/create')
  create(@Body() activity: ActivityDto): Promise<Activity> {
    return this.insertActivity.run(activity);
  }

  @Put('/update/:activityId')
  async update(
    @Param('activityId') activityId: number,
    @Body() activity: ActivityDto,
  ): Promise<Activity> {
    return this.editActivity.run(activityId, activity);
  }

  @Put('/inactive/:activityId')
  inactive(@Param('activityId') activityId: number): Promise<Activity> {
    return this.inactiveActivity.run(activityId);
  }

  @Get('/find/:activityId')
  find(@Param('activityId') activityId: number): Promise<Activity> {
    return this.findActivity.run(activityId);
  }

  @Get('/list')
  list(): Promise<Activity[]> {
    return this.listActivity.run();
  }
}
