import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';
import {Album} from '../../users/user-detail/albumModel';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetail: any;
  albums: Album[];
  constructor(private router: ActivatedRoute, public userService: UsersService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.userService.getUserById(params.params.id).subscribe(detail => {
        console.log(detail);
        this.userDetail = detail;
      });
    });
  }
  async albumUser(idUser) {
    this.userService.getAlbumsForUser(idUser).subscribe(album => {
      this.albums = album;
    });
  }

}
