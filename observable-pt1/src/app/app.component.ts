import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'observable-pt1';
  users: Observable<Array<Object>>;
  counter: number;

  constructor( private userService: MyService ) { }

  ngOnInit(): void {
    this.userService.getJSON().subscribe(data => {
          return data;
      });

      this.users = this.userService.getJSON();

      this.userService.getNumber().subscribe(number => {
       this.counter = number;
     });


  }

  public increase(): void {
    this.userService.increaseNumber();
  }

  public decrease(): void {
    this.userService.decreaseNumber();
  }

  public resetCount(): void {
    this.userService.resetCounter();
  }
}
