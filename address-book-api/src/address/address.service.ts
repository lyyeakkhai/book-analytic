import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressDto } from './dto/addressDto';

@Injectable()
export class AddressService {
  private addressDataStore: AddressDto[] = [
    {
      id: 1,
      addressLine: '123 Queen street',
      postCode: 4000,
      state: 'QLD',
      createdDate: new Date(),
    },
    {
      id: 2,
      addressLine: '123 Queen street',
      postCode: 4000,
      state: 'QLD',
      createdDate: new Date(),
    },
  ];

  async create(address: CreateAddressDto): Promise<AddressDto> {
    const getId = this.addressDataStore.length === 0 ? 0 : Math.max(...this.addressDataStore.map((a) => a.id));
    const newAddress = {
      ...address,
      id: getId + 1,
      createdDate: new Date(),
    }
    return new Promise((resolve) => {
      this.addressDataStore.push(newAddress);
      resolve(newAddress);
    });
  }

  async findAll(): Promise<AddressDto[]> {
    return new Promise((resolve) => {
      resolve(this.addressDataStore);
    });
  }

  async findOne(id: number): Promise<AddressDto> {
    const address = this.addressDataStore.find((a) => a.id === id);
    if (!address) {
      throw new Error(`Address with ID ${id} not found`);
    }
    return new Promise((resolve) => {
      resolve(address);
    });
  }

  async update(id: number, address: UpdateAddressDto): Promise<AddressDto> {
    const targetIndex = this.addressDataStore.findIndex((a) => a.id === id);
    if (targetIndex === -1) {
      throw new Error(`Address with ID ${id} not found`);
    }
    const updatedAddress = { ...this.addressDataStore[targetIndex], ...address };
    this.addressDataStore[targetIndex] = updatedAddress;
    return new Promise((resolve) => {
      resolve(updatedAddress);
    });
  }

  async replace(id: number, address: AddressDto): Promise<void> {
    const targetIndex = this.addressDataStore.findIndex((a) => a.id === id);
    if (targetIndex === -1) {
      throw new Error(`Address with ID ${id} not found`);
    }
    return new Promise((resolve) => {
      this.addressDataStore[targetIndex] = address;
      resolve();
    });
  }

  async delete(id: number): Promise<void> {
    const targetIndex = this.addressDataStore.findIndex((a) => a.id === id);
    if (targetIndex === -1) {
      throw new Error(`Address with ID ${id} not found`);
    }
    return new Promise((resolve) => {
      this.addressDataStore.splice(targetIndex, 1);
      resolve();
    });
  }
}
