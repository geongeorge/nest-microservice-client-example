import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('PRINT_SERVICE') private printer: ClientProxy,
  ) {}

  @Get()
  getHello() {
    // return this.appService.getHello();
    const payload = {
      html: '<h1>hello</h1>',
      store: 'boring.myshopify.com',
      app: 'final-invoice',
    };

    return this.printer.send('print', payload);
  }
}
