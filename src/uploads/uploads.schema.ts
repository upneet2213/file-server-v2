import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UploadDocument = Upload & Document;

@Schema()
export class Upload {
  @Prop()
  userId: string;
  @Prop({ type: Object })
  file: Express.Multer.File;
  @Prop()
  createdAt: string;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);
