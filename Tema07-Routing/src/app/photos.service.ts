import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Photo } from './_models/photo.model';

const url = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotosByAlbum(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(url + '?albumId=' + id);
  }
}
