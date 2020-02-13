import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Album } from './_models/album.model';

const url = 'https://jsonplaceholder.typicode.com/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  selectedAlbum = 1 ;

  constructor(private http: HttpClient) { }

  getUserAlbums(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(url + '?userId=' + userId);
  }

  getAlbum(): Observable<Album[]> {
    return this.http.get<Album[]>(url + '?id=1');
  }

  setSelectedAlbum(id: number) {
    this.selectedAlbum = id;
  }

  getSelectedAlbum() {
    return this.selectedAlbum;
  }
}
