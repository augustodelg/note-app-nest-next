import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsArray()
  @ApiProperty()
  readonly tagsIds: string[];
}
