import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './dto/create-user-event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  @EventPattern('user_created')
  createUserEventPattern(data: CreateUserEvent){
    this.appService.handleUserCreated(data);
  }

  @MessagePattern({cmd: 'get_analytics'})
  getAnalytics(){
    return this.appService.getAnaytics()
  }
}
