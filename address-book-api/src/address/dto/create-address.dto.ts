import { OmitType } from "@nestjs/mapped-types";
import { AddressDto } from "./addressDto";

export class CreateAddressDto extends OmitType(AddressDto, ['id', 'createdDate']) { }