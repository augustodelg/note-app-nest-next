import { Body, Controller, Get, Param, ParseArrayPipe, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTagDto } from '../dto/create-tag.dto';
import { TagsService } from '../services/tags.service';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) { }

  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  findAll() {
    return this.tagsService.findAll();
  }

  @Get()
  findByIds(@Query('id', ParseArrayPipe) id: string[]) {
    return this.tagsService.findByIds(id);
  }
}
