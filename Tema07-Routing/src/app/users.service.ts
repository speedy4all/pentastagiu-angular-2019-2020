import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from './_models/user';

const url = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUserId: number = 1;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(url);
  }

  public getUserDetails(id: number): Observable<any>{
    return this.http.get(url+"/"+id);
  }

  setSelectedUser(id: number){
    this.selectedUserId = id;
    console.log(id);
  }

  getSelectedUser(){
    return this.selectedUserId;
  }
}
