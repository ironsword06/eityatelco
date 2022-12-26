import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SearchCustomerPageComponent } from './pages/search-customer-page/search-customer-page.component';

const routes: Routes = [{path:'search',component:SearchCustomerPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
