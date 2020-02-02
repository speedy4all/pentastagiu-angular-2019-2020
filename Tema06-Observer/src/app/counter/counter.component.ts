import { Component, OnInit } from '@angular/core';

import { CounterService } from './../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  countNumber: number = 0;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getMessage().subscribe(value => {
      this.countNumber = value;
    })
  }

  count(){
    this.counterService.setMessage();
  }

}
