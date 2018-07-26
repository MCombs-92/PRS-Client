import {User} from '../user/user';

export class PurchaseRequest {
    Id: number;
    UserId: number;
    User: User;
    Description: string;
    Justification: string;
    RejectionReason: string;
    DeliveryMode: string;
    Status: string;
    Total: number;
    Active: boolean;
  
    constructor() {
      this.Id = 0;
      this.UserId = 0;
      this.Justification = "None";
      this.DeliveryMode = 'Pickup';
      this.Status = 'NEW';
      this.Active = true;
    }

}