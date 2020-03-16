import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


import { User } from './_models/user.model';

const url = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUserId = 1;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(url);
  }

  getUserDetails(id: number): Observable<User> {
    return this.http.get<User>(url + '/' + id);
  }

  setSelectedUser(id: number) {
    this.selectedUserId = id;
    console.log(id);
  }

  getSelectedUser() {
    return this.selectedUserId;
  }
}
