import {Component, OnInit} from '@angular/core';
import {AllDataService} from "../allDataService.service";

@Component({
  selector: 'app-user-v3',
  templateUrl: './user-v3.component.html',
  styleUrls: ['./user-v3.component.scss']
})
export class UserV3Component implements OnInit {

  constructor(public usersService: AllDataService) {
  }

  ngOnInit() {
    this.usersService.getAllData().subscribe(data => {
      console.log('UserV3Component', data);
      const users = data[0];
      const posts = data[1];

      const dataUser = users.map(user => {
        const postUser = posts.filter(post => {
          return post.userId === user.id;
        });
        return {
          user,
          postUser
        }
      });

      console.log('dataUser', dataUser)
    })
  }

}
