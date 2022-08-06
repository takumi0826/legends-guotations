import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { LegendsModule } from './legends/legends.module';

@Module({
  imports: [CategoryModule, LegendsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
