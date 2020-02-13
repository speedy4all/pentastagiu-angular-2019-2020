import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AlbumsService } from './../albums.service';
import { UsersService } from '../users.service';
import { Album } from '../_models/album.model';
import { User } from '../_models/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: User[] = [];

  constructor(private usersService: UsersService) {

   }

   //it works with the online link as well
  ngOnInit() {
      this.usersService.getUsers().subscribe( data => {
        this.users = data;
        console.log(this.users);
      });
  }

  selectUser(id: number){
    this.usersService.setSelectedUser(id);
    console.log(id);
  }

}
