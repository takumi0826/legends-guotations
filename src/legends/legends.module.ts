import { Module } from '@nestjs/common';
import { LegendsService } from './legends.service';
import { LegendsController } from './legends.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [LegendsController],
  providers: [LegendsService, PrismaService],
})
export class LegendsModule {}
