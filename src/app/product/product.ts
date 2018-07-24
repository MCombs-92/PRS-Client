import { Vendor } from '../vendor/vendor'

export class Product {
    Id: number;
    VendorId: number;
    Vendor: Vendor;
    PartNumber: string;
    Price: number;
    Unit: string;
    PhotoPath: string;
    Active: boolean;


    constructor() {
        this.VendorId = 0;
        this.Price = 0;
        this.Unit = 'Each';
        this.Active = true;
      }

}