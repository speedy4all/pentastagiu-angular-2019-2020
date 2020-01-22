import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class HttpjsonService {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {


  }

  getUsersData(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }


}
