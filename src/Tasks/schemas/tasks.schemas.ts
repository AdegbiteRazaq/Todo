import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type TasksDocument = Tasks & Document;

@Schema()
export class Tasks {
  // @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  UserId: number;

  @Prop()
  description: string;

  @Prop()
  status: TaskStatus;
}
export const TasksSchema = SchemaFactory.createForClass(Tasks);

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
