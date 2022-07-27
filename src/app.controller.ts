import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
// import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): object {
    return this.appService.getHealth();
  }
  // @MessagePattern({ cmd: 'greeting' })
  // getGreetingMessage(name: string): string {
  //   return `Hello ${name}`;
  // }

  // @MessagePattern({ cmd: 'greeting-async' })
  // async getGreetingMessageAysnc(name: string): Promise<string> {
  //   return `Hello ${name}`;
  // }
}
