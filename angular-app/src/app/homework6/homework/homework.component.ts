import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user.interface';
import {CounterService} from '../service/counter.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit, OnDestroy {
  public users: Array<User> = [];
  public counter: number;
  public counterAsync: Observable<number>;
  private obsSubscription: Subscription = null;

  constructor(
    private counterService: CounterService,
    private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
    this.obsSubscription = this.counterService.counterObs.subscribe((counter: number) => this.counter = counter);
    this.counterAsync = this.counterService.counterObs;
  }

  ngOnDestroy(): void {
    if (this.obsSubscription) {
      this.obsSubscription.unsubscribe();
    }
  }

  add(): void {
    this.counterService.counter = this.counter + 1;
  }
}
