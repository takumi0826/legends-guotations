import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ParentCategory } from './parent-category.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ParentCategory, (parent) => parent.id)
  parent: string;

  @Column({ default: false })
  delFlag: boolean;
}
