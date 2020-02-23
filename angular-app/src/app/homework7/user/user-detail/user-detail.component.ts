import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public show: boolean;
  @Input() public user: User;

  constructor() {
  }

  ngOnInit() {
  }

  showUserDetails() {
    this.show = !this.show;
  }
}
