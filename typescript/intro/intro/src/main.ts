import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// this is where we create our app
// this is where we add our configurations as well
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
