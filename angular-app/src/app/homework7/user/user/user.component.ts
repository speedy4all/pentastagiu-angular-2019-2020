import {Component, ComponentRef, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../model/user.interface';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: Array<User> = [];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
  }

  goToUserDetails(user: User): void {
    this.router.navigate(['user/user-details'], {state: {user}});
  }

}
