import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private count = new Subject<number>();
  private counter = 0;

  constructor() { }

  getMessage(): Observable<number>{
    return this.count.asObservable();
  }

  setMessage(){
    this.count.next(++this.counter);
  }
}
