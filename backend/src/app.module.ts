import { Module } from '@nestjs/common';

import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config.register],
      //validationSchema: config.validationSchema(),
    }),
    NotesModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
