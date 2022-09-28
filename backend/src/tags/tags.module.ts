import { Module } from '@nestjs/common';
import { TagsController } from './controller/tags.controller';
import { TagsService } from './services/tags.service';

@Module({
  imports: [],
  controllers: [TagsController],
  providers: [TagsService],
  exports: [TagsService],
})
export class TagsModule {}
