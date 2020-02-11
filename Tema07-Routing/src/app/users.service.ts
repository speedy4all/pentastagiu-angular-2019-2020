import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from './_models/user';

const url = '';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClientModule){ }

  getUsers() : Observable<User>{

  }
}
