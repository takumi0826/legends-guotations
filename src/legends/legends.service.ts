import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateLegendDto } from './dto/create-legend.dto';
import { UpdateLegendDto } from './dto/update-legend.dto';
@Injectable()
export class LegendsService {
  constructor(private prisma: PrismaService) {}

  async create(createLegendDto: CreateLegendDto) {
    return await this.prisma.$transaction(async (prisma) => {
      const legend = await prisma.legend.create({
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
      return await prisma.legend_category.createMany({ data });
    });
  }

  async findAll({ limit, offset }: { limit: number; offset: number }) {
    const res = await this.prisma.legend.findMany({
      include: {
        categories: { include: { category: { include: { parent: true } } } },
      },
      take: limit ? limit : undefined,
      skip: offset ? offset : undefined,
      orderBy: { id: 'desc' }, // TODO 作成日時を指定
    });
    const total = await this.prisma.legend.count();
    return {
      legends: res.map((v) => {
        return {
          id: v.id,
          meigen: v.meigen,
          name: v.name,
          category: v.categories.map((c) => {
            if (!c.category.parent && !c.category.id) return;
            return {
              parent: {
                id: c.category.parent.id,
                name: c.category.parent.name,
              },
              child: {
                id: c.category.id,
                name: c.category.name,
              },
            };
          }),
        };
      }),
      total,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} legend`;
  }

  update(id: number, updateLegendDto: UpdateLegendDto) {
    return `This action updates a #${id} legend`;
  }

  async remove(ids: number[]) {
    return await this.prisma.legend.deleteMany({ where: { id: { in: ids } } });
    // return `This action removes a #${id} legend`;
  }
}
