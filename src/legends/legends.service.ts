import { Injectable } from '@nestjs/common';
import { CreateLegendDto } from './dto/create-legend.dto';
import { UpdateLegendDto } from './dto/update-legend.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Legend } from './entities/legend.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { ParentCategory } from 'src/category/entities/parent-category.entity';

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
  ) {}

  create(createLegendDto: CreateLegendDto) {
    return 'This action adds a new legend';
  }

  async findAll(): Promise<Item[]> {
    const res = await this.legendRepository
      .createQueryBuilder('legend')
      .innerJoinAndSelect('legend.category', 'parent_category')
      .innerJoinAndSelect('parent_category.child', 'category')
      .where('parent_category.delFlag = :flag', { flag: false })
      .getMany();

    return res.map((v) => {
      return {
        meigen: v.meigen,
        name: v.name,
        category: {
          parent: v.category.name,
          child: v.category.child.map((v) => v.name),
        },
      };
    });
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
