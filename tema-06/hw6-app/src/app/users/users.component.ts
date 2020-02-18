import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: any;
  usersAsync: Observable<any>;
  destroy: Subscription;
  constructor(private usersApi: UsersService) { }

  ngOnInit() {
    this.destroy = this.usersApi.getUsers().subscribe( users => {
      this.users = users;
    });
    this.usersAsync = this.usersApi.getUsers();
  }

  ngOnDestroy() {
    this.destroy.unsubscribe();
  }

}
