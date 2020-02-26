import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {User} from "../users/userModel";

@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  public userUrl = 'https://jsonplaceholder.typicode.com/users';
  public postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http: HttpClient) { }

  public getAllData(): Observable<any>{
    let users = this.http.get<User[]>(this.userUrl);
    let posts = this.http.get<any>(this.postsUrl);
    return forkJoin([users, posts]);
}

}
