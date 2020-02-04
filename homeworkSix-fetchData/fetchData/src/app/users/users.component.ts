import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersResponse: Observable<any>;

  constructor(private httpClient: HttpClient) {

   }
  ngOnInit() {
      this.usersResponse = this.httpClient.get('/assets/users.json');
  }

}