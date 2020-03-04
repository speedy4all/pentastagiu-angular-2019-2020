import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public getUserById(id: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}/${id}`);
  }

}
