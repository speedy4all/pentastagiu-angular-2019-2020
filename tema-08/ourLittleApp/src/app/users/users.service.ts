import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './users';
import { Album } from '../photos/interface.albums';
import { Photos } from '../photos/interface.photos';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userUrl = 'https://jsonplaceholder.typicode.com/users';
  public albumUrl = 'https://jsonplaceholder.typicode.com/albums';
  public photoUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public getUserById(id: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}/${id}`);
  }

  public getAlbumsForUser(id: any): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumUrl}?userId=${id}`);
  }

  public getPhotosForUser(id: any): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.photoUrl}?albumId=${id}`);
  }

}
