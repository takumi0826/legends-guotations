import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';
import { LegendCategory } from './legend-category.entity';

@Entity()
export class Legend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  meigen: string;

  @Column()
  name: string;

  // @Column()
  // parent: string;

  // @ManyToOne(() => Category, (category) => category.childId)
  // categoryChild: string;
}
