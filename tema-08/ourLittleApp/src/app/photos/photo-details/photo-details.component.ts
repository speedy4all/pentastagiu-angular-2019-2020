import { Component, OnInit } from '@angular/core';
import { Photos } from '../interface.photos';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photos: Photos[];

  constructor(private router: ActivatedRoute, public userApi: UsersService) { }

  ngOnInit() {
    const dataId = this.router.snapshot.paramMap.get('id');
    this.userApi.getPhotosForUser(parseInt(dataId, 10)).subscribe(photo => {
      this.photos = photo;
    });
  }

}
