import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserV2RoutingModule } from './user-v2-routing.module';
import { UserV2Component } from './user-v2/user-v2.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {UsersService} from "./users.service";
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [UserV2Component, UserDetailsComponent, PhotosComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    UserV2RoutingModule
  ],
  providers: [UsersService]
})
export class UserV2Module { }
