import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule } from '@angular/flex-layout';
import { PaymentRoutingModule } from './payment-routing.module';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';

import { PaymentComponent } from './payment.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    CommonMaterialModule,
    FlexLayoutModule
  ],
  declarations: [PaymentComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class PaymentModule { }
