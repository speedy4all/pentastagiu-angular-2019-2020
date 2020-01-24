import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private myNumber = new Subject<number>();
  private counter = 0;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        return data;
    });
}

  public getJSON(): Observable<any> {
      return this.http.get('./../assets/users.json');
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
