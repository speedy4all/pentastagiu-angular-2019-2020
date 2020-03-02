import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Photos {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotosList(): Observable<Photos[]> {
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos');
}
}
