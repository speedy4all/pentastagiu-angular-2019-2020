import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'https://jsonplaceholder.typicode.com/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getUserAlbums(userId: number): Observable<Album[]>{
    return this.http.get(url+"?userId="+userId);
  }
}
