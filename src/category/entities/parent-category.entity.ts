import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class ParentCategory {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Category, (category) => category.parent)
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ default: false })
  delFlag: boolean;
}
