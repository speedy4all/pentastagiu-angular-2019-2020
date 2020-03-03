import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User, UserService} from '../services/user.service';
import {MatDialog} from "@angular/material/dialog";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$: Observable <User[]>;

  constructor(private userList: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.users$ = this.userList.getUserList();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data: {name: this.users$}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.users$ = result;
    });
  }

}
