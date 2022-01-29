import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user-dto';
import { CreateUserEvent } from './dto/create-user-events';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  cerateUser(@Body() createUserPayload: CreateUserDto){
    this.appService.createUser(createUserPayload);
  }

  @Get('analytics')
  getAnalytics(){
    return this.appService.getAnalytics()
  }  


}
