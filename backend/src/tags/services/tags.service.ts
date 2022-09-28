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

  findOne(id: string) {
    return this.tagRepository.findOneBy({ id: id });
  }

  findByIds(ids: string[]) {
    return this.tagRepository.findBy({ id: In(ids) });
  }
}
