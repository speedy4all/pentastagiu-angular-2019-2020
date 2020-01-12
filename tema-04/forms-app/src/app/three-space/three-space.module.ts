import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThreeSpaceComponent } from './three-space.component';
import { ThreeSpacePipe } from './three-space.pipe';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ThreeSpaceComponent, ThreeSpacePipe],
  exports: [
    ThreeSpaceComponent
  ]
})
export class ThreeSpaceModule { }
