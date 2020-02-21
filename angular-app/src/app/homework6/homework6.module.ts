import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeworkComponent} from './homework/homework.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CounterService} from './service/counter.service';
import {UserService} from './service/user.service';


@NgModule({
  declarations: [
    HomeworkComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HomeworkComponent
  ],
  providers: [
    UserService,
    CounterService
  ]
})
export class Homework6Module {
}
