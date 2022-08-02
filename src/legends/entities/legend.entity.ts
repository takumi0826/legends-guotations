import { Category } from 'src/category/entities/category.entity';
import { ParentCategory } from 'src/category/entities/parent-category.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Entity,
  ManyToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Legend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  meigen: string;

  @Column()
  name: string;

  @OneToOne(() => ParentCategory, (parent) => parent.legend)
  category: ParentCategory;
}
