import { CustomerModel } from '../models/customer';
import { Filters } from '../models/filters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  controllerUrl:string =`${environment.apiUrl}`


  // getList(filter: Filters): Observable<CustomerModel[]> {
  //   console.log(filter);
  //   let newPath = this.controllerUrl + 'customers';
  //   let queryParams: any = {};
  //   if (filter?.firstName) {
  //     queryParams['firstName'] = filter.firstName;
  //   }
  //   if (filter?.id) {
  //     queryParams['id'] = filter.id;
  //   }
  //   if (filter?.customerId) {
  //     queryParams['customerId'] = filter.customerId;
  //   }
  //   if (filter?.accountNumber) {
  //     queryParams['accountNumber'] = filter.accountNumber;
  //   }
  //   if (filter?.gsmNumber) {
  //     queryParams['gsmNumber'] = filter.gsmNumber;
  //   }
  //   if (filter?.lastName) {
  //     queryParams['lastName'] = filter.lastName;
  //   }
  //   if (filter?.orderNumber) {
  //     queryParams['orderNumber'] = filter.orderNumber;
  //   }
  //   // if (filter?.firstName) {
  //   //   queryParams = { ...queryParams, filter};
  //   // }
  //   return this.httpClient.get<CustomerModel[]>(newPath+'/firstName='+filter.firstName);


  
  getList(): Observable<CustomerModel[]>{
  return this.httpClient.get<CustomerModel[]>(this.controllerUrl+ '/customers')
  }
}
