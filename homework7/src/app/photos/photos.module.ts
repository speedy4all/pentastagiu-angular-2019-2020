import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
