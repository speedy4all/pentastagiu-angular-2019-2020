import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', {static: false}) public myNav: MatSidenav;
  title = 'materialUiExample';

  close() {
    this.myNav.close();
  }
  sidenavOpen() {
    if (this.myNav.opened) {
      this.close();
    } else {
      this.myNav.open();
    }
  }
}
