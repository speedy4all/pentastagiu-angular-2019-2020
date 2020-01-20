import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoShellComponent} from './todo-shell.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [TodoShellComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodoShellComponent
  ],
})
export class TodoShellModule { }
