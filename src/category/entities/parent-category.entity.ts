import { LegendCategory } from 'src/legends/entities/legend-category.entity';
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
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class ParentCategory {
  @PrimaryColumn()
  @OneToMany(() => LegendCategory, (lc) => lc.parentId, {
    onDelete: 'CASCADE',
  })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Category, (category) => category.parent)
  child: Category[];

  @Column({ default: false, select: false })
  delFlag: boolean;
}
