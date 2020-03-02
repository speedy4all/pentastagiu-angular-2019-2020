import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosComponent} from './photos/photos.component';
import {PhotosService} from './photos.service';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  providers: [
    PhotosService
  ]
})
export class PhotosModule {
}
