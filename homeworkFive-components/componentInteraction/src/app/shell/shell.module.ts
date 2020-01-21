import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ShellComponent]
})
export class ShellModule { }
