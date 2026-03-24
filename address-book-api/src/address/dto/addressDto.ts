
export class AddressDto {
    id: number;
    addressLine: string;
    postCode: number;
    state: string;
    createdDate: Date;
    constructor(id: number, addressLine: string, postCode: number, state: string, createdDate: Date) {
        this.id = id;
        this.addressLine = addressLine;
        this.postCode = postCode;
        this.state = state;
        this.createdDate = createdDate;
    }
}