import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './userModel';
import {Album} from "./user-detail/albumModel";
import {Photos} from "./photos-detail/photosModel";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userUrl = 'https://jsonplaceholder.typicode.com/users';
  public albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  public photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  public getAlbumsForUser(id: any): Observable<Album[]> {
  return this.http.get<Album[]>(`${this.albumsUrl}?userId=${id}`);
  }
  public getPhotosForUser(id: any): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.photosUrl}?albumId=${id}`);
  }
}
