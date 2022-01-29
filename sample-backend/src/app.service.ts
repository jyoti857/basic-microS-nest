import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user-dto';
import { CreateUserEvent } from './dto/create-user-events';

@Injectable()
export class AppService {

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy, 
    @Inject("ANALYTICS") private readonly analyticsClient: ClientProxy
  ){}
  private readonly users = []
  getHello(): string {
    return 'Hello World!';
  }

  createUser(payload: CreateUserDto){
     this.users.push(payload);
     this.analyticsClient.emit('user_created', new CreateUserEvent(payload.email))  
     this.communicationClient.emit('user_created', new CreateUserEvent(payload.email))
  }

  getAnalytics(){
    return this.analyticsClient.send({cmd: 'get_analytics'}, {})
  }
}
