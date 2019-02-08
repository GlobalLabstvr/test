import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path:'login', loadChildren:'./login/login.module#LoginModule', canActivate: [AuthGuard] },
  { path:'payment',loadChildren:'./payment/payment.module#PaymentModule', canActivate: [SecureInnerPagesGuard] },
  { path:'profile',loadChildren:'./profile/profile.module#ProfileModule', canActivate: [SecureInnerPagesGuard] },
  { path:'', redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
