import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiRoutingModule } from './ui-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiRoutingModule,
  ]
})
export class UiModule { }
