import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [UploadsModule, MongooseModule.forRoot('mongodb://localhost/files'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
