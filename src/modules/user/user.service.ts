import { MailService } from './../../shared/services/mail.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private mailService: MailService) {}

  sendEmail() {
    this.mailService.sendMail();
  }
}
