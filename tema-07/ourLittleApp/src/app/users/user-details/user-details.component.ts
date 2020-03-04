import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails: any;

  constructor(public userApi: UsersService, private router: ActivatedRoute) { }

  ngOnInit() {
    const dataId = this.router.snapshot.paramMap.get('id');

    this.userApi.getUserById(parseInt(dataId, 10)).subscribe(details => {
      this.userDetails = details;
    });
  }

}
