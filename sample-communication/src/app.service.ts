import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './dto/create-user-event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreatedEvent(data: CreateUserEvent){
    console.log("User created from Communication Service --->", data)
  }


}
