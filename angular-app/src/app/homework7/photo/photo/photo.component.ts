import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../service/photo.service';
import {Photo} from '../model/photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  public photos: Array<Photo> = [];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit() {
    this.photoService.getPhotos().subscribe((photos: Photo[]) => this.photos = photos);
  }

}
