import { Injectable } from '@nestjs/common';
import { CreateLegendDto } from './dto/create-legend.dto';
import { UpdateLegendDto } from './dto/update-legend.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Legend } from './entities/legend.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { ParentCategory } from 'src/category/entities/parent-category.entity';
import { LegendCategory } from './entities/legend-category.entity';

type Item = {
  meigen: string;
  name: string;
  category: {
    parent: string;
    child: string[];
  };
};

@Injectable()
export class LegendsService {
  constructor(
    @InjectRepository(Legend)
    private legendRepository: Repository<Legend>,
    @InjectRepository(ParentCategory)
    private parentRepository: Repository<ParentCategory>,
    @InjectRepository(LegendCategory)
    private lcRepository: Repository<LegendCategory>,
  ) {}

  create(createLegendDto: CreateLegendDto) {
    return 'This action adds a new legend';
  }

  async findAll() {
    const qb = await this.parentRepository.createQueryBuilder('parent');
    // const res = await this.lcRepository
    //   .createQueryBuilder('lc')
    //   .innerJoinAndSelect('lc.legendId', 'legend')
    //   .innerJoinAndSelect('lc.parentId', 'parent_category')
    //   .innerJoinAndSelect('parent_category.child', 'category')
    //   // .leftJoinAndSelect(qb.subQuery().from(Comment, 'c1').getQuery(), '')
    //   // .where('parent_category.delFlag = :flag', { flag: false })
    //   .getMany();
    // return res;
    const res = await this.legendRepository
      .createQueryBuilder('legend')
      .innerJoinAndSelect('legend.id', 'legend_category')
      .innerJoinAndSelect('legend_category.parentId', 'parent_category')
      .innerJoinAndSelect('parent_category.child', 'category')
      // .leftJoinAndSelect(qb.subQuery().from(Comment, 'c1').getQuery(), '')
      // .where('parent_category.delFlag = :flag', { flag: false })
      .getMany();
    return res;
    // return await this.parentRepository
    //   .createQueryBuilder('parent')
    //   .leftJoinAndSelect('parent.child', 'category')
    //   .getMany();

    // return res.map((v) => {
    //   return {
    //     meigen: v.meigen,
    //     name: v.name,
    //     category: {
    //       parent: v.category.name,
    //       child: v.category.child.map((v) => v.name),
    //     },
    //   };
    // });
  }

  findOne(id: number) {
    return `This action returns a #${id} legend`;
  }

  update(id: number, updateLegendDto: UpdateLegendDto) {
    return `This action updates a #${id} legend`;
  }

  remove(id: number) {
    return `This action removes a #${id} legend`;
  }

  // private createChildCategory(child: Category[]): string[] {

  //   return
  // }
}
