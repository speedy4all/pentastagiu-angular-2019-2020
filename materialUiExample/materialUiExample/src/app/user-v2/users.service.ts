import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../users/userModel';
import {HttpClient} from '@angular/common/http';
import {Album} from "../users/user-detail/albumModel";
import {Photos} from "../users/photos-detail/photosModel";

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
  public getUserById(id: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}/${id}`);
  }
  public getAlbumsForUser(id: any): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumsUrl}?userId=${id}`);
  }
  public getPhotosForUser(id: any): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.photosUrl}?albumId=${id}`);
  }
}
