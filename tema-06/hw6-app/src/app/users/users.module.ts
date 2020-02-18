import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
