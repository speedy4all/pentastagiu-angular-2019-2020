import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../model/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photosApi = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosApi);
  }
}
