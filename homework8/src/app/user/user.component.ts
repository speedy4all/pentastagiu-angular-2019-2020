import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User, UserService} from '../services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {UserDialogComponent} from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>;
  dataSource: User[];

  constructor(private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userService.getUserList().subscribe(users => {
      this.dataSource = users;
    });
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
        width: '500px',
        data: this.dataSource.find((userId: any) => userId.id === id)
      })
    ;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.users$ = result;
    });
  }

}
