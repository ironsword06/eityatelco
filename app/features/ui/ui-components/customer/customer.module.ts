import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CustomerFilterPipe } from './pipes/customer-filter.pipe';
import { CustomerRoutingModule } from './customer-routing.module';
import { NgModule } from '@angular/core';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { SearchCustomerPageComponent } from './pages/search-customer-page/search-customer-page.component';
import { SharedModule } from '../../../../shared/shared.module';
import { UiComponentsModule } from '../ui-components.module';

@NgModule({
  declarations: [
    SearchCustomerComponent,
    SearchCustomerPageComponent,
    CustomerFilterPipe,
  ],
  exports: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    UiComponentsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[CustomerFilterPipe]
})
export class CustomerModule {}
