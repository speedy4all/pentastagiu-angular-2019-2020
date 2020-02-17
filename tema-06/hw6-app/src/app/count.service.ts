import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }

  private count = new Subject<number>();
  private counter = 0;

  getMessage(): Observable<number> {
    return this.count.asObservable();
  }

  increment() {
    this.count.next(++this.counter);
  }

  decrement() {
    this.count.next(--this.counter);
  }

  setMessage() {
    this.count.next();
  }

}
