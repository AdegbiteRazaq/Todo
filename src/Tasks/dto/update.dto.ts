import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../schemas/tasks.schemas';

export class UpdateStatusDto {
  @ApiProperty()
  status: TaskStatus;
}
