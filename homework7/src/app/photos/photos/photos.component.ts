import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Photos, PhotosService} from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos$: Observable<Photos[]>;

  constructor( private photoDetails: PhotosService) { }

  ngOnInit() {
    this.photos$ = this.photoDetails.getPhotosList();
  }

}
