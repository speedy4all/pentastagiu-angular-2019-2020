import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../../users/userModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-v2',
  templateUrl: './user-v2.component.html',
  styleUrls: ['./user-v2.component.scss']
})
export class UserV2Component implements OnInit {

  users: User[];
  constructor(public userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
  detailUser(idUser) {
    this.router.navigate(['/userV2', idUser]);
  }
}
