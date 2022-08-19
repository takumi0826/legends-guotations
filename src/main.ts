import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpService } from '@nestjs/axios';
import { interval, switchMap } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.ORIGIN,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
  });

  const http = new HttpService();
  interval(15 * 60 * 1000)
    .pipe(switchMap(() => http.get('https://salty-sands-26486.herokuapp.com/')))
    .subscribe();

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
