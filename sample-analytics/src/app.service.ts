import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './dto/create-user-event';

@Injectable()
export class AppService {
  
  private readonly analytics: any[] = []
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent){
    console.log("handle user created ALANYTICS  ---> ", data)
    this.analytics.push({
      email: data.email,
      timestamp: new Date().getTime(),
    })
  }

  getAnaytics(){
    return this.analytics;
  }
}
