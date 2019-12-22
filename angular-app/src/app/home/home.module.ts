import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
