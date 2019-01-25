import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    CommonMaterialModule
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
