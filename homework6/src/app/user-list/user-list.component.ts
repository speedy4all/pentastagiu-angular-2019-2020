import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContactDetailsService, User} from "../contact-details.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  title = 'Users list';
  users$: Observable<User[]>;

  constructor(private contactDetails: ContactDetailsService) {
  }

  ngOnInit() {
    this.users$ = this.contactDetails.getUserList();
  }
}
