import { Product } from '../product/product';

export class RequestLineItem {
    Id: number;
    PurchaseRequestId: number;
    ProductId: number; 
    Product: Product;
    Quantity: number;
  
    constructor() {
      this.Id = 0;
      this.PurchaseRequestId = 0;
      this.ProductId = 0;
      this.Quantity = 1;
    }
}
