import { AdressModel } from "./adress";
import { OrderModel } from "./order";

export interface BillingAccountModel{
    id:number;
    accountNumber:string;
    accountName:string;
    description:string;
    status:string;
    addresses:AdressModel[];
    orders: OrderModel[];
  }