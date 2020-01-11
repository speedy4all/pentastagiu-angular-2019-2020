import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { ATodoButtonComponent } from './atodo-button/atodo-button.component';



@NgModule({
  declarations: [ATodoButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoItemComponent],
})
export class TodoItemModule { }
