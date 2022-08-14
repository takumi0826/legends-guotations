import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.ORIGIN,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
  });
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
