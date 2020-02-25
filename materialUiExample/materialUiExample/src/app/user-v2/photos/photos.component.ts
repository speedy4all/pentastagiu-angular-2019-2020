import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';
import {Photos} from "../../users/photos-detail/photosModel";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: Photos[];
  constructor(private router: ActivatedRoute, public userService: UsersService) { }

  ngOnInit() {
    const dataId = this.router.snapshot.paramMap.get('id');
      this.userService.getPhotosForUser(parseInt(dataId, 10)).subscribe(photos => {
        console.log(photos);
        this.photos = photos;
      });
  }

}
