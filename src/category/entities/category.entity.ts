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
  @JoinColumn({ name: 'parentId' })
  parent: ParentCategory;

  @Column({ default: false, select: false })
  delFlag: boolean;
}
