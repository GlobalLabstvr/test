import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ViewComponent } from './view/view.component'

const routes: Routes = [ 
  { path:'', component: ProfileComponent },
  { path:'view', component: ViewComponent},

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
