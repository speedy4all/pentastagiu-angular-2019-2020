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

   //it works with the online link as well
  ngOnInit() {
      this.usersResponse = this.httpClient.get('/assets/data/users.json');
  }

}
