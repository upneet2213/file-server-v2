import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { createReadStream } from 'fs';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Helper } from './helper';
import { FileInterceptor } from '@nestjs/platform-express';
import { CollectionDto, ValidationPipe } from '@forlagshuset/nestjs-mongoose-paginate';
import { MyCollectionProperties } from './uploads.properties';
import { Upload } from './uploads.schema';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}
  @Get()
  async files(
    @Query(new ValidationPipe(MyCollectionProperties))
    collectionDto: CollectionDto,
  ) {
    console.log(collectionDto);
    return await this.uploadsService.getUserFiles(collectionDto);
  }

  @Get('download/:file')
  download(@Param() file) {
    const newFile = createReadStream(join(process.cwd(), 'files/' + file.file));
    return new StreamableFile(newFile);
  }
  @Post('upload/:uploadId')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: Helper.filePath,
        filename: Helper.customFileName,
      }),
    }),
  )
  async uploadFile(
    @Param() id,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Upload> {
    return await this.uploadsService.addFile({
      file,
      userId: id.uploadId,
      createdAt: new Date().toLocaleString(),
    });
  }
}
