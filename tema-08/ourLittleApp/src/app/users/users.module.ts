import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
