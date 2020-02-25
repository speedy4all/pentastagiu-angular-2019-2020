import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentTitle: string;

  constructor() {
    this.parentTitle = '';
  }

  wasClicked() {
    this.parentTitle = 'pentastagiu-angular';
  }

}
