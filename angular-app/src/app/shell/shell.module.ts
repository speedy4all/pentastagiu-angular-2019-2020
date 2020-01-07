import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';



@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
  ,exports: [ShellComponent]
})
export class ShellModule { }
