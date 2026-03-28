import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AddressEntity {

  @PrimaryGeneratedColumn()
  @Column()
  id: number;

  @Column()
  addressLine: string;

  @Column()
  postCode: string;

  @Column()
  state: string;

  @Column()
  createdDate: Date;

  constructor(id: number, addressLine: string, postCode: string, state: string, createdDate: Date) {
    this.id = id;
    this.addressLine = addressLine;
    this.postCode = postCode;
    this.state = state;
    this.createdDate = createdDate;
  }
}