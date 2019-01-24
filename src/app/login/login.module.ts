import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonMaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
