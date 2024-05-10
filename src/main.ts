import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Inventory of Tasks')
    .setDescription('Inventory of pending tasks')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const port = 3000;
  await app.listen(port);
  Logger.log(
    `Aplicación ejecutándose en: http://localhost:${port}/api#/  🍌 🐒 🌴`,
    'Bootstrap',
    false,
  );
}
bootstrap();
