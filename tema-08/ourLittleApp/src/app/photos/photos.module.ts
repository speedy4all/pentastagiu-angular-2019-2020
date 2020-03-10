import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { UsersService } from '../users/users.service';
import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { AlbumsComponent } from './albums/albums.component';


@NgModule({
  declarations: [PhotosComponent, PhotoDetailsComponent, AlbumsComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  providers: [
    UsersService
  ]
})
export class PhotosModule { }
