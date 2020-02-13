import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from '../user-details/details/details.component';
import {PhotosComponent} from './photos/photos.component';

const routes: Routes = [
  {
    path: 'album',
    component: PhotosComponent,
    children: [
      {
        path: ':id',
        component: PhotosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
