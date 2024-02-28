import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

// modules handle dependency injections
// allows classes to know about each other
// this is where most errors occur
// anything that isn't a controller is a provider
// need to import CatsModule for entire application to know about Cats since it's a new resource/domain we've created
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
