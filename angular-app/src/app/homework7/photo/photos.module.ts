import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoComponent } from './photo/photo.component';
import {HttpClientModule} from '@angular/common/http';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';


@NgModule({
  declarations: [PhotoComponent, PhotoDetailsComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    HttpClientModule
  ]
})
export class PhotosModule { }
