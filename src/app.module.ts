import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const PrintMicroservice = {
  provide: 'PRINT_SERVICE',
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 4000,
      },
    }),
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrintMicroservice, AppService],
})
export class AppModule {}
