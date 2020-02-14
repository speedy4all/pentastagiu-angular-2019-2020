import { Component, OnInit } from '@angular/core';

import { Photo } from 'src/app/_models/photo.model';

import { AlbumsService } from './../../albums.service';
import { PhotosService } from './../../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotosService,
    private albumService: AlbumsService) { }

  ngOnInit() {
    console.log(this.albumService.getSelectedAlbum());

    this.photoService.getPhotosByAlbum(this.albumService.getSelectedAlbum())
    .subscribe(
      data => {
        this.photos = data;
        console.log(data);
      }
    );
  }

}
