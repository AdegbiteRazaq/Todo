import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../schemas/tasks.schemas';

export class TaskDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  UserId: number;

  @ApiProperty()
  description: string;

  //   @ApiProperty()
  //   status: TaskStatus;
}
