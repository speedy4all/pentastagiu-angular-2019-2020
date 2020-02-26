import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserV3Component} from "./user-v3/user-v3.component";


const routes: Routes = [
  {
    path: 'userV3',
    component: UserV3Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserV3RoutingModule { }
