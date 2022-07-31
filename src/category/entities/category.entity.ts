import { LegendCategory } from 'src/legends/entities/legend-category.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { ParentCategory } from './parent-category.entity';

@Entity()
export class Category {
  @PrimaryColumn()
  @OneToMany(() => LegendCategory, (legend) => legend.child)
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => ParentCategory, (parent) => parent.id)
  parent: string;

  @Column({ default: false })
  delFlag: boolean;
}
