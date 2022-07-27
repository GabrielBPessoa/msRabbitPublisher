import { Injectable } from '@nestjs/common';
import { BrokerService } from './broker/broker.service';

@Injectable()
export class AppService {
  getHealth(): object {
    return { status: true! };
  }

  getHello(): string {
    return 'Hello World!';
  }
}
