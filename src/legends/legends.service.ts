import { Injectable } from '@nestjs/common';
import { CreateLegendDto } from './dto/create-legend.dto';
import { UpdateLegendDto } from './dto/update-legend.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Legend } from './entities/legend.entity';
import { LegendCategory } from './entities/legend-category.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';

type Item = {
  meigen: string;
  name: string;
  category: {
    parent: string;
    child: string[];
  };
};

type Res = {
  // legendCategory_id: 1;
  // legendCategory_parent: '001';
  // legendCategory_legendId: 1;
  // legendCategory_childId: '001';
  legend_id: number;
  legend_meigen: string;
  legend_name: string;
  category_id: string;
  category_name: string;
  // category_delFlag: 0;
  category_parentId: string;
};

@Injectable()
export class LegendsService {
  constructor(
    @InjectRepository(Legend)
    private legendRepository: Repository<Legend>,
    @InjectRepository(LegendCategory)
    private legendCategoryRepository: Repository<LegendCategory>,
  ) {}

  create(createLegendDto: CreateLegendDto) {
    return 'This action adds a new legend';
  }

  async findAll(): Promise<Item[]> {
    // return await this.legendRepository
    //   .createQueryBuilder('legend')
    //   .innerJoinAndSelect('legend.id', 'legend_category')

    //   // .where('category.parentId = :id', { id: 1 })
    //   .getRawMany();
    const res = (await this.legendCategoryRepository
      .createQueryBuilder('legendCategory')
      .innerJoinAndSelect('legendCategory.legend', 'legend')
      .innerJoinAndSelect('legendCategory.child', 'category')
      // .select(['legend.meigen', 'legend.name'])
      .getRawMany()) as Res[];

    // const output = res.map((val) => {
    //   const {
    //     legend_id,
    //     legend_meigen,
    //     legend_name,
    //     category_id,
    //     category_name,
    //     category_parentId,
    //   } = val;

    //   const

    //   return {
    //     id: legend_id,
    //     meigen: legend_meigen,
    //     name: legend_name,
    //     category: {
    //       parent: category_parentId,
    //       child: category_id,
    //     },
    //   };
    // });

    return undefined;
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
}
