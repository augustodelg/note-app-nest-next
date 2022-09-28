import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsService } from 'src/tags/services/tags.service';
import { Repository } from 'typeorm';
import { Note } from '../../database/entities/note.entity';
import { CreateNoteDto } from '../dto/create-note.dto';
import { UpdateNoteDto } from '../dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
    @Inject(TagsService) readonly tagService: TagsService,
  ) {}

  private async getTagsIds(tags: string[]) {
    return await this.tagService.findByIds(tags);
  }
  async create(createNoteDto: CreateNoteDto) {
    const tags = await this.getTagsIds(createNoteDto.tagsIds);
    const newNote = this.noteRepository.create(createNoteDto);
    newNote.tags = tags;
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
    const tags = await this.getTagsIds(updateNoteDto.tagsIds);
    const note = await this.noteRepository.findOneBy({ id: id });
    this.noteRepository.merge(note, updateNoteDto);
    note.tags = tags;
    return this.noteRepository.save(note);
  }

  remove(id: string) {
    return this.noteRepository.delete({ id: id });
  }
}
