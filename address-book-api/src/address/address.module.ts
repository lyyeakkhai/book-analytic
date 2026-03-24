import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AddressModule {}
