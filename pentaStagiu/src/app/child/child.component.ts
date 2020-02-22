import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  public obsValue: string;
  public obsError: string;
  private obsValueSubscription: Subscription = null;

  constructor(private appService: AppService ) { }

  ngOnInit() {
    this.subscribe();
  }

  public subscribe() {
    this.obsValueSubscription = this.appService.messageStream
    .pipe(
      map((val: string) => val.toLowerCase()),
      map((val: string) => val + '1')
    )
    .subscribe(
      (value: string) => {
        this.obsValue = value;
      },
      (error: string) => {
        this.obsError = error;
      },
      () => {
        alert('Obs Completed');
      });
  }

  public unsubscribe() {
    if (this.obsValueSubscription) {
      this.obsValueSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    if (this.obsValueSubscription) {
      this.obsValueSubscription.unsubscribe();
    }
  }

}
