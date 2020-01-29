import { Component, OnInit } from '@angular/core';
import {UsersDataService} from '../users-data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users = [];

  constructor(private _usersDataService: UsersDataService) { }

  ngOnInit() {
     this._usersDataService.getUsers()
        .subscribe(data => this.users = data);
  }

}
