import { MailService } from './services/mail.service';
import { Global, Module } from '@nestjs/common';

const providers = [MailService];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class SharedModule {}
