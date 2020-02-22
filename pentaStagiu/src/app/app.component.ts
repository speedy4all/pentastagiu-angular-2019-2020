import { Component, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService) {}

  public sendMessage(value: string) {
    this.appService.message = value;
  }

  public complete() {
    this.appService.complete();
  }

  public error(value: string) {
    this.appService.error = value;
  }

}
