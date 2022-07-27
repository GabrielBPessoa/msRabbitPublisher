import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsentService } from './consents.service';
import { ConsentController } from './consents.controller';
import { BrokerService } from 'src/broker/broker.service';
import { BrokerModule } from 'src/broker/broker.module';

@Module({
  imports: [ConfigModule.forRoot(), BrokerModule],
  controllers: [ConsentController],
  providers: [ConsentService],
})
export class ConsentModule {}
