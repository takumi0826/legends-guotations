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
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { LegendCategory } from './legend-category.entity';

@Entity()
export class Legend {
  @PrimaryColumn()
  @OneToMany(() => LegendCategory, (lc) => lc.legendId, {
    onDelete: 'CASCADE',
  })
  id: number;

  @Column()
  meigen: string;

  @Column()
  name: string;
}
