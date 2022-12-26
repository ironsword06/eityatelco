import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CustomerFilterPipe } from '../../pipes/customer-filter.pipe';
import { CustomerModel } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Filters } from '../../models/filters';
import { PopUpService } from 'src/app/shared/services/pop-up.service';
import { PopupModel } from 'src/app/shared/models/popupModel';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss'],
})
export class SearchCustomerComponent implements OnInit {
  searchFormGroup: FormGroup;
  customers!: CustomerModel[];
  allCustomers!:CustomerModel[];
  filterApplied:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private customerFilterPipe: CustomerFilterPipe,
    private popupService:PopUpService
  ) {}
  ngOnInit(): void {
    this.getListCustomers();
    // this.searchForm();
  }

  // searchForm():void{
  //   this.searchFormGroup = this.formBuilder.group({
  //     id: [0],
  //     customerId: [0],
  //     accountNumber:[''],
  //     gsmNumber:[''],
  //     firstName: [''],
  //     lastName: [''],
  //     orderNumber:['']
  //   })

  // }

  getListCustomers() {
    this.customerService.getList().subscribe((response) => {
      this.customers = response;
      this.allCustomers=response;
      console.log(response);
    });
  }

  searchFilter() {
    this.customers = this.customerFilterPipe.transform(
      this.allCustomers,
      this.customerFilter.id,
      this.customerFilter.customerId,
      this.customerFilter.firstName,
      this.customerFilter.lastName,
      this.customerFilter.gsmNumber,
      this.customerFilter.orderNumber
    );
    if(this.customers.length <= 0){
      this.runPopUp()
    }else{
      this.filterApplied=true;
    }
  }
  clearFilter() {
    this.filterApplied=false;
    this.customerFilter = {
      id: null,
      accountNumber: '',
      customerId: null,
      firstName: '',
      lastName: '',
      gsmNumber: '',
      orderNumber: null,
    };
  }

  customerFilter: Filters = {
    id: null,
    accountNumber: '',
    customerId: null,
    firstName: '',
    lastName: '',
    gsmNumber: '',
    orderNumber: null,
  };
  popUpModel: PopupModel = {
    isOpen: true,
    title: 'No customer found!',
    description: 'Would you like to add a new customer ?',
    icon: 'fa-sharp fa-solid fa-circle-exclamation',
    leftButtonText: 'Cancel',
    rightButtonText: 'Create a new customer',
  };
  show: boolean = false;

  runPopUp() {
    this.popupService.startPopUp(this.popUpModel);
    this.showPopUp();
  }

  showPopUp() {
    this.popupService.isPopUp.subscribe((response) => {
      this.show = response.isOpen;

      //  isOpen = this.popUp1
      console.log(response);
    });
  }
}
