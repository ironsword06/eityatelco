import { CityModel } from "./city"

export interface AdressModel{
    id:number;
    city:CityModel[];
    street: string;
    flatNumber: number;
    description: string;
}