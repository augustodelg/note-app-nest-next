import { Note } from './note.entity';
import { Entity, ManyToMany, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;
  @ManyToMany(() => Note, (note) => note.tags)
  notes: Note[];
}
