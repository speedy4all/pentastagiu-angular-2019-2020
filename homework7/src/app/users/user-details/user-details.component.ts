import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UsersService} from '../users.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetail: any;

  constructor(private route: ActivatedRoute,
              public userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    const dataId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(parseInt(dataId, 10)).subscribe(detail => {
      console.log(detail);
      this.userDetail = detail;
    });

    this.route.paramMap.subscribe(params => {
    });

  }

}


