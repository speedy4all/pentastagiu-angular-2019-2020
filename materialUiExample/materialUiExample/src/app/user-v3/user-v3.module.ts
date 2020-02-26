import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserV3RoutingModule } from './user-v3-routing.module';
import { UserV3Component } from './user-v3/user-v3.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {HttpClientModule} from "@angular/common/http";
import {AllDataService} from "./allDataService.service";


@NgModule({
  declarations: [UserV3Component],
  imports: [
    CommonModule,
    UserV3RoutingModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [AllDataService]
})
export class UserV3Module { }
