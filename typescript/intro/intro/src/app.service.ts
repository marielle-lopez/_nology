import { Injectable } from '@nestjs/common';

// class responsible for holding business logic and validation
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
