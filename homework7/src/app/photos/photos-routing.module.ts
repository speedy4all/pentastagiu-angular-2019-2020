import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotosComponent} from './photos/photos.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
