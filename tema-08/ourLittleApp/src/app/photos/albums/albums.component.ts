import { Component, OnInit } from '@angular/core';
import { Album } from '../interface.albums';
import { UsersService } from 'src/app/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  userDetails: any;
  albums: Album[];

  constructor(private router: ActivatedRoute, public userApi: UsersService) { }

  ngOnInit() {
    const dataId = this.router.snapshot.paramMap.get('userId');

    this.userApi.getUserById(parseInt(dataId, 10)).subscribe(detail => {
      this.userDetails = detail;
    });

    this.router.paramMap.subscribe(params => {
    });

    this.userApi.getAlbumsForUser(parseInt(dataId, 10)).subscribe(album => {
      this.albums = album;
    });

  }

}
