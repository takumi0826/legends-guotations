import { Category } from 'src/category/entities/category.entity';
import { ParentCategory } from 'src/category/entities/parent-category.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Entity,
  ManyToMany,
  OneToOne,
  JoinTable,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Legend } from './legend.entity';

@Entity()
export class LegendCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Legend, (legend) => legend.id)
  @JoinColumn({ name: 'legendId' })
  legendId: number;

  @ManyToOne(() => ParentCategory, (parent) => parent.id)
  @JoinColumn({ name: 'parentId' })
  parentId: number;
}
