
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/typings/card';

import {MaterialModule} from '../material.module';

import {UserDetailsRoutingModule} from './user-details-routing.module';

import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MaterialModule
  ]
})
export class UserDetailsModule { }
