import { Module } from '@nestjs/common';

import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config.register],
      //validationSchema: config.validationSchema(),
    }),
    NotesModule,
    TagsModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
