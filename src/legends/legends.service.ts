import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLegendDto } from './dto/create-legend.dto';
import { UpdateLegendDto } from './dto/update-legend.dto';

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
  constructor(private prisma: PrismaService) {}

  async create(createLegendDto: CreateLegendDto) {
    // createLegendDto.name = '木梨憲武';
    // createLegendDto.meigen = '撮れてる';
    // createLegendDto.cateogory = [{ id: 1 }, { id: 2 }];

    const legend = await this.prisma.legend.create({
      data: {
        name: createLegendDto.name,
        meigen: createLegendDto.meigen,
      },
    });
    const data = createLegendDto.category.map((categoryId) => {
      return {
        legendId: legend.id,
        categoryId,
      };
    });
    return this.prisma.legend_category.createMany({ data });
  }

  async findAll() {
    const res = await this.prisma.legend.findMany({
      include: {
        categories: { include: { category: { include: { parent: true } } } },
      },
    });
    return res.map((v) => {
      return {
        meigen: v.meigen,
        name: v.name,
        category: {
          parent: v.categories.map((c) => c.category.parent.name),
          child: v.categories.map((c) => c.category.name),
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
