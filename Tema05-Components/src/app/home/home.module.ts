import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HeaderModule } from './header/header.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SharedComponentsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
