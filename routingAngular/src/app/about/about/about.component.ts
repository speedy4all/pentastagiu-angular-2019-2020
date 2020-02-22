import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users: any;

  constructor(private usersApi: UsersService) { }

  ngOnInit() {
    this.usersApi.getUsers().subscribe( users => {
      this.users = users;
    });
  }

}
