export class CreateUploadDto {
    readonly userId: string;
    readonly file: Express.Multer.File;
    readonly createdAt: string;
  }
  