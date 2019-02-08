import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, ViewComponent, EditComponent, AvatarComponent],
 
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonMaterialModule,
    ]
})

export class ProfileModule { }
