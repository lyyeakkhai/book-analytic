import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { AddressBookModule } from './address-book/address-book.module';
import { AddressBookController } from './address-book.controller';
import { AddressBookController } from './address-book.controller';

@Module({
  imports: [AddressModule, AddressBookModule],
  controllers: [AppController, AddressBookController],
  providers: [AppService],
})
export class AppModule {}
