import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUsers} from './users';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  private _url: string = "/assets/data/users.json";
  private myNumber = new Subject<number>();
  private counter = 0;

  constructor(private http:HttpClient) { }

  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }
  public getNumber(): Observable<number> {
    return this.myNumber.asObservable();
  }

  public increaseNumber(): void {
    this.myNumber.next(this.counter += 1);
}

  public decreaseNumber(): void {
    this.myNumber.next(this.counter -= 1);
  }

  public resetCounter(): void {
    this.myNumber.next(this.counter = 0);
  }


}
