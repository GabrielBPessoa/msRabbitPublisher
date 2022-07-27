import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async publishMessage(exchange: string, routingKey: string, payload: any) {
    return this.amqpConnection.publish(exchange, routingKey, payload);
  }
}
