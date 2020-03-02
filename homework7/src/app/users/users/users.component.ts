import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UsersService, User} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor( private userDetails: UsersService) { }

  ngOnInit() {
    this.users$ = this.userDetails.getUserList();
  }

}
