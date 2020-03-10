import { Component, OnInit } from '@angular/core';
import { User } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(public userApi: UsersService) { }

  ngOnInit() {
    this.userApi.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
