import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LegendsService } from './legends.service';
import { CreateLegendDto } from './dto/create-legend.dto';
import { UpdateLegendDto } from './dto/update-legend.dto';
import { IdParamPipe } from 'src/pipe/id-param.pipe';

@Controller('legends')
export class LegendsController {
  constructor(private readonly legendsService: LegendsService) {}

  @Post('/create')
  create(@Body() createLegendDto: CreateLegendDto) {
    return this.legendsService.create(createLegendDto);
  }

  @Get('/find-all')
  findAll() {
    return this.legendsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legendsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegendDto: UpdateLegendDto) {
    return this.legendsService.update(+id, updateLegendDto);
  }

  @Delete(':id')
  remove(@Param('id', IdParamPipe) ids: number[]) {
    return this.legendsService.remove(ids);
  }
}
