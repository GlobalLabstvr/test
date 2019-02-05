import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentModule } from '../payment/payment.module';
import { PaymentComponent } from '../payment/payment.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


const routes: Routes = [
  { path:'', component: SignInComponent },
  { path:'sign-up', component: SignUpComponent },
  { path:'verify-email', component: VerifyEmailComponent },
  { path:'payment', loadChildren:'../payment/payment.module#PaymentModule'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
