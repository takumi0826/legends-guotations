import { Category } from 'src/category/entities/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { Legend } from './legend.entity';

@Entity()
export class LegendCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Legend, (legend) => legend.id)
  legend: number;

  @Column()
  parent: string;

  @ManyToOne(() => Category, (category) => category.id)
  child: string;
}
