import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

    // Create Swagger options
  const options = new DocumentBuilder()
    .setTitle('Address Book API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  // Generate the Swagger document
  const document = SwaggerModule.createDocument(app, options);

  // Configure Swagger UI
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}

bootstrap();
