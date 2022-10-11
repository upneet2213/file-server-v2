import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { UploadSchema } from './uploads.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Files', schema: UploadSchema }])],
  providers: [UploadsService],
  controllers: [UploadsController]
})
export class UploadsModule {}
