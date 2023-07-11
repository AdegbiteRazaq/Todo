import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { TaskStatus, Tasks } from './schemas/tasks.schemas';
import { TaskDto } from './dto/task.dto';
import { SuccessResponse } from 'src/response/success';
import { ErrorResponse } from 'src/response/error';
import { UpdateStatusDto } from './dto/update.dto';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

  async createTask(task: TaskDto) {
    const { title, UserId, description } = task;
    const newTask = await this.tasksRepository.create({
      title,
      UserId,
      description,
      status: TaskStatus.IN_PROGRESS,
    });
    return SuccessResponse(
      200,
      'Task added successfully',
      { Task: newTask },
      null,
    );
  }

  async getAllTasks() {
    const tasks = await this.tasksRepository.findAll();

    return SuccessResponse(
      200,
      'All tasks successfully fetched',
      { Tasks: tasks },
      null,
    );
  }

  async GetAllTasksByUserIdandStatus(UserId: number, status: TaskStatus) {
    const tasks: Tasks[] =
      await this.tasksRepository.findAllTasksByUserIdandStatus({
        UserId,
        status,
      });
    if (tasks.length == 0) {
      return ErrorResponse(
        400,
        'No task with that userId and Status',
        null,
        null,
      );
    }
    return SuccessResponse(
      200,
      'All tasks sucessfully fetched',
      { Tasks: tasks },
      null,
    );
  }

  async UpdateTaskStatusByUserId(
    userId: number,
    updateStatusDto: UpdateStatusDto,
  ) {
    const tasks = await this.tasksRepository.UpdateTaskStatusByUserId(
      { userId: userId },
      { status: updateStatusDto.status },
    );
    if (!tasks) {
      return ErrorResponse(400, 'No task with that userId found', null, null);
    }
    return SuccessResponse(
      200,
      'tasks updated successfully',
      { Tasks: tasks },
      null,
    );
  }
}
