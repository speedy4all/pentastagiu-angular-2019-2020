import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counterObs: Observable<number>;
  private _counter = new BehaviorSubject(0);

  constructor() {
    this.counterObs = this._counter.asObservable();
  }

  set counter(v: number) {
    this._counter.next(v);
  }
}
