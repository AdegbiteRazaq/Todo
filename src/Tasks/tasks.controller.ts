import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { async } from 'rxjs';
import { TaskStatus, Tasks } from './schemas/tasks.schemas';
import { TaskDto } from './dto/task.dto';
import { UpdateStatusDto } from './dto/update.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Post('/create')
  async createTask(@Res() res, @Body() task: TaskDto) {
    const taskResponse = await this.taskservice.createTask(task);
    return res.status(taskResponse.responseCode).send(taskResponse);
  }

  @Get('/getalltasks')
  async getAllTask(@Res() res) {
    const taskResponse = await this.taskservice.getAllTasks();
    console.log(taskResponse);
    return res.status(taskResponse.responseCode).send(taskResponse);
  }

  @Get('/getalltasksByUserIdandStatus/:userId/:status')
  async GetAllTasksByUserIdandStatus(
    @Res() res,
    @Param('userId') userId: number,
    @Param('status') status: TaskStatus,
  ) {
    const taskResponse = await this.taskservice.GetAllTasksByUserIdandStatus(
      userId,
      status,
    );
    console.log(taskResponse);
    return res.status(taskResponse.responseCode).send(taskResponse);
  }

  @Put('/:userId')
  async updateTaskStatusByUserId(
    @Res() res,
    @Param('userId') userId: number,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    const taskResponse = await this.taskservice.UpdateTaskStatusByUserId(
      userId,
      updateStatusDto,
    );
    return res.status(taskResponse.responseCode).send(taskResponse);
  }
}
