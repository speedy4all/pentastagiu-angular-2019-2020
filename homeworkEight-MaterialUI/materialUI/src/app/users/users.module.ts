import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UnicknamesComponent } from './unicknames/unicknames.component';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [UsersComponent, UnicknamesComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
