import { Injectable } from '@nestjs/common';
import { BrokerService } from '../broker/broker.service';

@Injectable()
export class ConsentService {
  constructor(private brokerService: BrokerService) {}

  publishToQueue(payload: any) {
    const exchange = process.env.EXCHANGE_NAME;
    const routing = process.env.ROUTING_KEY;
    this.brokerService.publishMessage(exchange, routing, payload);
  }
}
