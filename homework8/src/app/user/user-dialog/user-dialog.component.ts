import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User, UserService} from '../../services/user.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUserList();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
