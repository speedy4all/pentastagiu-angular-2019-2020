import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTodoComponent } from './main-todo.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';



@NgModule({
  declarations: [MainTodoComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    MainTodoComponent
  ]
})
export class MainTodoModule { }
