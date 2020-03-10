import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { User } from '../users/users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  users: User[];

  constructor(public userApi: UsersService, private router: Router) { }

  ngOnInit() {
    this.userApi.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  detailUser(userId: any) {
    this.router.navigate(['/photos', userId]);
  }

}
