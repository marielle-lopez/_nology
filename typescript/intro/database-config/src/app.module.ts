import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DogsModule } from './dogs/dogs.module';
import { ConfigModule } from '@nestjs/config';

// we chose MikroOrm is our chosen ORM, and we need to tell the app that
// this is our config
@Module({
  imports: [
    MikroOrmModule.forRoot({}),
    ConfigModule.forRoot({ cache: true }), // for better performance
    DogsModule, // adding this is called dependency injection, we are letting the app know DogsModule exists
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
