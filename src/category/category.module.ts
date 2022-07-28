import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentCategory } from './entities/parent-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, ParentCategory])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
