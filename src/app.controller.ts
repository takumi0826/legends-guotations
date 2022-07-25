import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('legends-guotations')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  getAll(): string {
    return this.appService.getAll();
  }
}
