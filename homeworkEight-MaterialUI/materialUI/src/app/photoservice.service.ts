import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PhotoserviceService {

  constructor(private http:HttpClient) { }

  fetchPhotos(): Observable<Object> {
   return this.http.get('/assets/photos.json');
  }
}