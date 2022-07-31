import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/entities/category.entity';
import { CategoryModule } from './category/category.module';
import { ParentCategory } from './category/entities/parent-category.entity';
import { LegendsModule } from './legends/legends.module';
import { Legend } from './legends/entities/legend.entity';
import { LegendCategory } from './legends/entities/legend-category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'legends',
      entities: [Category, ParentCategory, Legend, LegendCategory],
      synchronize: true,
      logging: true,
    }),
    CategoryModule,
    LegendsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
