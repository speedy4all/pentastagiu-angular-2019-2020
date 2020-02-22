import { Component, OnInit } from '@angular/core';
import { PeopleService} from '../people.service';
import { Observable } from 'rxjs';
import { PhotoserviceService} from '../photoservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public people$:Observable<any>
  public photos$:Observable<any>

  constructor( private peopleService: PeopleService, private photosService: PhotoserviceService ) { }

  

  ngOnInit() {
    this.people$ =  this.peopleService.fetchPeople();
    this.photos$ =  this.photosService.fetchPhotos();
  }

}
