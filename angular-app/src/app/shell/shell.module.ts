import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from '../home/home.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';



@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [ShellComponent]
})
export class ShellModule { }
