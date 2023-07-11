import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { Tasks } from './schemas/tasks.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksSchema } from './schemas/tasks.schemas';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tasks.name, schema: TasksSchema }]),
  ],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  //   providers: [Tasks],
})
export class TasksModule {}
