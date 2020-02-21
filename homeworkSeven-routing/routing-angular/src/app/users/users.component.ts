import { Component, OnInit } from '@angular/core';
import { PeopleService} from '../people.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public people$:Observable<any>

  constructor( private peopleService: PeopleService) { }

  

  ngOnInit() {
    this.people$ =  this.peopleService.fetchPeople();
  }

}
