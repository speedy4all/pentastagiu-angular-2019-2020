import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UnicknamesComponent } from './unicknames/unicknames.component';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserphotosService } from './userphotos.service';


@NgModule({
  declarations: [UsersComponent, UnicknamesComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UserphotosService]
})
export class UsersModule { }
