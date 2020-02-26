import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserV2Component} from './user-v2/user-v2.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {PhotosComponent} from './photos/photos.component';


const routes: Routes = [
  {
    path: 'userV2',
    component: UserV2Component,
  },
  {
    path: 'userV2/:idUser',
    component: UserDetailsComponent
  },
  {
    path: 'userV2/:id/album/photos/:id',
    component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserV2RoutingModule { }
