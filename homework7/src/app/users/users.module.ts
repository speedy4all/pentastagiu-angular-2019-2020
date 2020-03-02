import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersService} from './users.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {
}
