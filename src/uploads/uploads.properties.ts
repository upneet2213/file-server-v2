import {
  CollectionProperties,
  Expose,
} from '@forlagshuset/nestjs-mongoose-paginate';

export class MyCollectionProperties extends CollectionProperties {
  @Expose({  sortable: true, default: true,filterable: true })
  readonly userId: string;

  @Expose({  sortable: true })
  readonly createdAt: string;

  readonly file: Express.Multer.File;
}
