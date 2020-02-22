import { Component, OnInit } from '@angular/core';
import { PeopleService} from '../../people.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unicknames',
  templateUrl: './unicknames.component.html',
  styleUrls: ['./unicknames.component.css']
})
export class UnicknamesComponent implements OnInit {
  public people$:Observable<any>
  constructor( private peopleService: PeopleService) { }

  ngOnInit() {
    this.people$ =  this.peopleService.fetchPeople();
  }

}
