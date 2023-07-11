import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';
import { TasksRepository } from './tasks/tasks.repository';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/Todo'), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
