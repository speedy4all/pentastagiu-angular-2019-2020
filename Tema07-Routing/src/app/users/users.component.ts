
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { UsersService } from '../users.service';
import { User } from '../_models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: User[];

  constructor(private usersService: UsersService) {

   }

   //it works with the online link as well
  ngOnInit() {
      this.usersService.getUsers().subscribe( data => {
        this.users = data;
      });
  }

}
