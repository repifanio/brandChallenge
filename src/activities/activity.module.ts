import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from '../shared/entities/activity.entity';
import { ActivityController } from './activity.controller';
import { InsertActivity } from './services/insertActivity.service';
import { EditActivity } from './services/editActivity.service';
import { InactiveActivity } from './services/inactiveActivity.service';
import { ListActivity } from './services/listActivities.service';
import { FindActivity } from './services/findActivity.service';

@Module({
  imports: [TypeOrmModule.forFeature([Activity])],
  providers: [
    InsertActivity,
    EditActivity,
    InactiveActivity,
    ListActivity,
    FindActivity,
  ],
  controllers: [ActivityController],
})
export class ActivityModule {}
