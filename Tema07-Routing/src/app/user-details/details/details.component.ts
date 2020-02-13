import { AlbumsService } from './../../albums.service';

import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/_models/user';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/_models/album';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: User;
  albums: Album[];

  constructor(private userService: UsersService,
              private albumsService: AlbumsService) { }

  ngOnInit() {

    this.userService.getUserDetails(this.userService.getSelectedUser()).subscribe( data => {
      this.user = data;
      console.log(this.user);
    });

    this.albumsService.getUserAlbums(this.userService.getSelectedUser()).subscribe( data => {
      this.albums = data;
      console.log(this.albums);
    });
  }

}
