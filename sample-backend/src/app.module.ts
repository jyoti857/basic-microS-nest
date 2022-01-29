import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register(
      // so here we register different services that we can use to dispatch events and messages
      [
        {
          name: 'COMMUNICATION',
          transport: Transport.TCP
        },
        {
          name: "ANALYTICS",
          transport: Transport.TCP,
          options: {
            port: 3001
          } 
        }
      ] 
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
