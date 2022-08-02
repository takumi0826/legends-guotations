import { Module } from '@nestjs/common';
import { LegendsService } from './legends.service';
import { LegendsController } from './legends.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Legend } from './entities/legend.entity';
import { Category } from 'src/category/entities/category.entity';
import { ParentCategory } from 'src/category/entities/parent-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Legend, Category, ParentCategory])],
  controllers: [LegendsController],
  providers: [LegendsService],
})
export class LegendsModule {}
