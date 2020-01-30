import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './users-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularObserver';
  counter: number;

  constructor( private counterService: UsersDataService ) { }

  ngOnInit(): void {
     this.counterService.getNumber().subscribe(number => {
       this.counter = number;
     });

    }  

     public increase(): void {
      this.counterService.increaseNumber();
    }
  
    public decrease(): void {
      this.counterService.decreaseNumber();
    }
  
    public resetCount(): void {
      this.counterService.resetCounter();
    }


  

}
