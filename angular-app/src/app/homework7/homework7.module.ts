import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Homework7RoutingModule } from './homework7-routing.module';
import {UsersModule} from './user/users.module';
import {PhotosModule} from './photo/photos.module';
import { HomeworkComponent } from './homework/homework.component';


@NgModule({
  declarations: [HomeworkComponent],
  imports: [
    CommonModule,
    Homework7RoutingModule,
    UsersModule,
    PhotosModule
  ],
  exports: [
    HomeworkComponent
  ]
})
export class Homework7Module { }
