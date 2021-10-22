import { Injectable, BadGatewayException, OnModuleInit } from '@nestjs/common';

@Injectable()
export class MailService implements OnModuleInit {
  transporter = null;
  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    this._initializeTranporter();
  }

  async _initializeTranporter() {
    console.log('Initializing transporter');
    this.transporter = 'transporter';
  }

  async sendMail() {
    if (this.transporter === null) {
      console.warn('Tranporter not initialized');
      return;
    }

    console.log('Sending emai successful');

    return true;
  }
}
