import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpjsonService } from './../httpjson.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = [];

  constructor(private userService: HttpjsonService) {

   }

  ngOnInit() {
    this.userService.getUsersData().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });

  }

}
