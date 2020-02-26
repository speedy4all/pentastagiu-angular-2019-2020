import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [UsersComponent, PhotosComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
