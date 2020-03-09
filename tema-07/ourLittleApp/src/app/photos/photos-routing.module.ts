import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'photos/:userId',
    component: AlbumsComponent
  },
  {
    path: 'photos/:id/album/photos/:id',
    component: PhotoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
