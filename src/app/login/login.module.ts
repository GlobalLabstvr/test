import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonMaterialModule
  ],
  declarations: [
                SignInComponent, 
                SignUpComponent, 
                VerifyEmailComponent]
})
export class LoginModule { }
