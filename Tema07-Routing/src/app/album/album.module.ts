import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { PhotosComponent } from './photos/photos.component';

import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MaterialModule
  ]
})
export class AlbumModule { }
