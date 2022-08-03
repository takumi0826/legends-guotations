import { Legend } from 'src/legends/entities/legend.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ParentCategory } from './parent-category.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ParentCategory, (parent) => parent.id)
  parent: ParentCategory;

  @ManyToOne(() => Legend, (legend) => legend.id)
  legend: Legend;

  @Column({ default: false, select: false })
  delFlag: boolean;
}
