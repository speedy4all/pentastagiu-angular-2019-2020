import {Component, Inject, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Photos} from "./photosModel";

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.scss']
})
export class PhotosDetailComponent implements OnInit {

  photos: Photos[];
  constructor(
    public userService: UsersService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PhotosDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.userService.getPhotosForUser(this.data.idAlbum).subscribe(photos => {
      this.photos = photos;
      console.log('data', this.data, 'userDetailAlbum', this.photos);
    });
  }

}
