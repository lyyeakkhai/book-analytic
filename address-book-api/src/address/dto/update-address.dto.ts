import { PartialType } from '@nestjs/mapped-types';
import { AddressDto } from './addressDto';

export class UpdateAddressDto extends PartialType(AddressDto) {}
