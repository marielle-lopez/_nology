import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // ConfigModule is what we need to read our `.env` variables
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
