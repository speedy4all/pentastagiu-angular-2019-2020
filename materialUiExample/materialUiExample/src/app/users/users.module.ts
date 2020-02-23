import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {UsersService} from './users.service';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';


@NgModule({
  declarations: [UsersComponent, UserDetailComponent, PhotosDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule,
  ],
  providers: [
    UsersService,
  ],
  entryComponents: [UserDetailComponent, PhotosDetailComponent]
})
export class UsersModule { }
