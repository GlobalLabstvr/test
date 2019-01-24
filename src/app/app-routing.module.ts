import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login', loadChildren:'./login/login.module#LoginModule'},
  {path:'customers', loadChildren:'./customers/customers.module#CustomersModule'},
  {path:'orders', loadChildren:'./orders/orders.module#OrdersModule'},

  {path:'', redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
