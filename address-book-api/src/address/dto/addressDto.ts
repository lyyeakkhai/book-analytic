import { IsDate, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class AddressDto {
    @IsNumberString()
    id: number;

    @IsNotEmpty()
    addressLine: string;
    
    @IsNumberString()
    postCode: number;
    
    @IsString()
    state: string;
    
    @IsDate()
    createdDate: Date;

    constructor(id: number, addressLine: string, postCode: number, state: string, createdDate: Date) {
        this.id = id;
        this.addressLine = addressLine;
        this.postCode = postCode;
        this.state = state;
        this.createdDate = createdDate;
    }
}