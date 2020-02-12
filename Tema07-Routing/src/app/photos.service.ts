import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const url = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get(url);
  }
}
