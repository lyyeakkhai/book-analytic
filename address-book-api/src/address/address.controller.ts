import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Put,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ParseIntPipe } from '@nestjs/common';
import { AddressDto } from './dto/addressDto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @HttpCode(200)
  create(@Body() address: CreateAddressDto) {
    return this.addressService.create(address);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(id, updateAddressDto);
  }


  @Put(':id')
  replace(@Param('id', ParseIntPipe) id: number, @Body() address: AddressDto) {
    return this.addressService.replace(id, address);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.addressService.delete(id);
  }
}
