import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class ParentCategory {
  @PrimaryColumn({ length: 3 })
  @OneToMany(() => Category, (category) => category.parent)
  id: string;

  @Column()
  name: string;

  @Column({ default: false })
  delFlag: boolean;
}
