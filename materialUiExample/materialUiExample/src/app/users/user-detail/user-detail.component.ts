import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {User} from '../userModel';
import {UsersService} from '../users.service';
import {Album} from './albumModel';
import {PhotosDetailComponent} from '../photos-detail/photos-detail.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: any;
  userDetailAlbum: Album[];
  constructor(
    public userService: UsersService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
    this.user = this.data.user;
    this.userService.getAlbumsForUser(this.data.user.id).subscribe(albums => {
      this.userDetailAlbum = albums;
    });
  }
  albumDetail(idAlbum) {
    const dialogRef = this.dialog.open(PhotosDetailComponent, {
      data: {idAlbum}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
