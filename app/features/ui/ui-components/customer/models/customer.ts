import { AdressModel } from "./adress";
import { BillingAccountModel } from "./billingAcount";
import { ContactMedium } from "./contactMedium";

export interface CustomerModel{
    id: number;
    customerId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    nationalityId:number;
    role: string ;
    motherName: string;
    fatherName: string;
    adresses:AdressModel[];
    contactMedium: ContactMedium;
    billingAccounts:BillingAccountModel[];
}

