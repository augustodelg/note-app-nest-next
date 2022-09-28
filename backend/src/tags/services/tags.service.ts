import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateTagDto } from '../dto/create-tag.dto';
import { Tag } from 'src/database/entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}
  create(createTagDto: CreateTagDto) {
    const newTag = this.tagRepository.create(createTagDto);
    return this.tagRepository.save(newTag);
  }

  findAll() {
    return this.tagRepository.find({});
  }

  async getAllNotes(id: string, params: any) {
    const result = await this.tagRepository
      .createQueryBuilder('tag')
      .leftJoinAndSelect('tag.notes', 'note')
      .where('tag.id = :id and note.archived = :archived', {
        id: id,
        ...params,
      })
      .getOne();
    return result.notes;
  }

  async findByIds(ids: string[]) {
    return await this.tagRepository.findBy({ id: In(ids) });
  }
}
