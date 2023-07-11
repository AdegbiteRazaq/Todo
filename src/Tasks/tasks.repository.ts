import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tasks, TasksDocument } from './schemas/tasks.schemas';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class TasksRepository {
  constructor(
    @InjectModel(Tasks.name) private tasksModel: Model<TasksDocument>,
  ) {}

  public async create(task: any): Promise<Tasks> {
    const newTask = new this.tasksModel(task);
    return newTask.save();
  }

  public async findAll(): Promise<Tasks[]> {
    return this.tasksModel.find().exec();
  }

  public async findAllTasksByUserIdandStatus(
    tasksFilterQuery: FilterQuery<Tasks>,
  ): Promise<Tasks[]> {
    return this.tasksModel.find(tasksFilterQuery).exec();
  }
  public async UpdateTaskStatusByUserId(
    tasksFilterQuery: FilterQuery<Tasks>,
    tasks: Partial<Tasks>,
  ): Promise<Tasks> {
    return this.tasksModel.findOneAndUpdate(tasksFilterQuery, tasks, {
      new: true,
    });
  }
}
