import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserphotosService {

  public userUrl = 'https://jsonplaceholder.typicode.com/users';
  public photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }

  public getAllData(): Observable<any> {
    let users = this.http.get<any>(this.userUrl);
    let photos = this.http.get<any>(this.photosUrl);
    return forkJoin([users, photos])
  }
}
