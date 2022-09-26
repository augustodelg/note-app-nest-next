import { Module } from '@nestjs/common';
import { NotesService } from './services/notes.service';
import { NotesController } from './controllers/notes.controller';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
