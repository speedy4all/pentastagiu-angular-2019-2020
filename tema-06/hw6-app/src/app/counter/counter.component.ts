import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterDisplay = 0;

  constructor(private countService: CountService) { }

  ngOnInit() {
    this.countService.getMessage().subscribe(value => {
      this.counterDisplay = value;
    });
  }

  increaseCounter() {
    this.countService.increment();
  }

  decreaseCounter() {
    this.countService.decrement();
  }

}
