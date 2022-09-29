import { Module } from '@nestjs/common';
import { NotesService } from './services/notes.service';
import { NotesController } from './controllers/notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '../database/entities/note.entity';
import { TagsService } from 'src/tags/services/tags.service';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  imports: [TagsModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
