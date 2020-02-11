import {Component, OnInit} from '@angular/core';
import {Observable, timer} from 'rxjs';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  currentCounter = 0;
  counter$: Observable<any>;
  isCounting = false;
  subscription;
  countTitle = 'Counter';

  constructor() {
  }

  ngOnInit() {
    this.counter$ = timer(1000, 1000);
  }

  startCount() {
    this.isCounting = true;
    this.subscription = this.counter$.subscribe(() => this.currentCounter++);

  }

  pauseCount() {
    this.isCounting = false;
    this.subscription.unsubscribe();
  }

  clearCount() {
    this.isCounting = false;
    this.subscription.unsubscribe();
    this.currentCounter = 0;
  }
}
