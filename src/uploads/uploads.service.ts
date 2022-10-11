import {
  CollectionDto,
  DocumentCollector,
} from '@forlagshuset/nestjs-mongoose-paginate';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUploadDto } from './uploads.dto';
import { UploadDocument } from './uploads.schema';

@Injectable()
export class UploadsService {
  constructor(
    @InjectModel('Files') private uploadModel: Model<UploadDocument>,
  ) {}

  async addFile(createFileDto: CreateUploadDto) {
    console.log(createFileDto)
    const createdFile = new this.uploadModel(createFileDto);
    return createdFile.save()
  }
  async getUserFiles(collectionDto: CollectionDto) {
    const collector = new DocumentCollector<UploadDocument>(this.uploadModel);
    return collector.find(collectionDto);
  }
}
