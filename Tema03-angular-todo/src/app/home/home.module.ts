import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
