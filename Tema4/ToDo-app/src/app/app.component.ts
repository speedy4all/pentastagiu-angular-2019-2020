import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  completed ; 
  active ;

  onCompleted(item){
    this.completed = item;
  }

  onActive(item){
    this.active = item;
  }
}
