import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components for Navigation service
//import { SignInComponent } from './login/sign-in/sign-in.component';
//import { SignUpComponent } from './login/sign-up/sign-up.component';
//import { VerifyEmailComponent } from './login/verify-email/verify-email.component';
// Import canActivate guard services
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";

const routes: Routes = [
  {path:'login', loadChildren:'./login/login.module#LoginModule'},
  {path:'registration', loadChildren:'./registration/registration.module#RegistrationModule'},
  {path:'customers', loadChildren:'./customers/customers.module#CustomersModule'},
  {path:'payment',loadChildren:'./payment/payment.module#PaymentModule'},
  {path:'', redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
