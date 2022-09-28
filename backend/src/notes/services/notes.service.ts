import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateNoteDto } from '../dto/create-note.dto';
import { UpdateNoteDto } from '../dto/update-note.dto';
import { Note } from '../entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}
  create(createNoteDto: CreateNoteDto) {
    const newNote = this.noteRepository.create(createNoteDto);
    return this.noteRepository.save(newNote);
  }

  findAll(params: any) {
    return this.noteRepository.find({
      where: params,
      order: { updated_at: 'DESC' },
    });
  }

  async findOne(id: string) {
    return await this.noteRepository.findOneBy({ id: id });
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const note = await this.noteRepository.findOneBy({ id: id });
    this.noteRepository.merge(note, updateNoteDto);
    return this.noteRepository.save(note);
  }

  remove(id: string) {
    return this.noteRepository.delete({ id: id });
  }
}
