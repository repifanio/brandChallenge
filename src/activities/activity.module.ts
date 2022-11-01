import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from '../shared/entities/activity.entity';
import { ActivityController } from './activity.controller';
import { InsertActivity } from './services/insertActivity.service';

@Module({
  imports: [TypeOrmModule.forFeature([Activity])],
  providers: [InsertActivity],
  controllers: [ActivityController],
})
export class ActivityModule {}
