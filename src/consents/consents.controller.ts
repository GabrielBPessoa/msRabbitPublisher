import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ConsentService } from './consents.service';
import { ConsentDto } from './dto/consent-dto';

@Controller('queue')
export class ConsentController {
  constructor(private readonly consentService: ConsentService) {}

  @Post()
  publishMessage(@Request() req, @Body() consentDto: ConsentDto) {
    consentDto.consent_id = Math.random().toString().slice(2, 13);
    consentDto.cpf = Math.random().toString().slice(2, 13);
    this.consentService.publishToQueue(consentDto);
    console.log('message published: ', consentDto);
    return { message: consentDto };
  }
}
