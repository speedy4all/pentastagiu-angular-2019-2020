import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHeaderComponent } from './todo-header.component';



@NgModule({
  declarations: [TodoHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodoHeaderComponent
  ]
})
export class TodoHeaderModule { }
