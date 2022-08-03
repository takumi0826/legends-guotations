import { Category } from 'src/category/entities/category.entity';
import { ParentCategory } from 'src/category/entities/parent-category.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Entity,
  ManyToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Legend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  meigen: string;

  @Column()
  name: string;

  @OneToMany(() => Category, (category) => category.legend)
  @JoinColumn({
    name: 'id',
    referencedColumnName: 'legend',
  })
  category: Category[];
}
