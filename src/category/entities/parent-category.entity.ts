import { Legend } from 'src/legends/entities/legend.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class ParentCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Category, (category) => category.parent)
  @JoinColumn({
    name: 'child',
    referencedColumnName: 'id',
  })
  child: Category;

  @Column({ default: false, select: false })
  delFlag: boolean;
}
