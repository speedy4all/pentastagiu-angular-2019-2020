import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import { User } from '../_models/user.model';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  sideNavOpened = false;
  users: User[] = [];

  constructor(private usersService: UsersService, public dialog: MatDialog) {

   }

   // it works with the online link as well
  ngOnInit() {
      this.usersService.getUsers().subscribe( data => {
        this.users = data;
        console.log(this.users);
      });
  }

  selectUser(id: number) {
    this.usersService.setSelectedUser(id);
    console.log(id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`closed`);
    });
  }

}
