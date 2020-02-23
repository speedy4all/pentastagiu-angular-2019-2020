import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {User} from './userModel';
import {MatDialog} from '@angular/material';
import {UserDetailComponent} from './user-detail/user-detail.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'email'];
  dataSource: User[];
  selectedRowIndex = -1;
  constructor(public userService: UsersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      console.log(users);
      this.dataSource = users;
    });
  }
  highlight(row) {
    this.selectedRowIndex = row.id;
    const dialogRef = this.dialog.open(UserDetailComponent, {
      height: '400px',
      width: '600px',
      data: {user: row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
