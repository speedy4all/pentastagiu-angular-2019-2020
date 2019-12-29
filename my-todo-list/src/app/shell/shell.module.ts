import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';



@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    ShellComponent
  ]
})
export class ShellModule { }
