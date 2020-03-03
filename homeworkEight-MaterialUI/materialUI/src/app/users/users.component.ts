import { Component, OnInit } from '@angular/core';
import { PeopleService} from '../people.service';
import { Observable } from 'rxjs';
import { PhotoserviceService} from '../photoservice.service';
import { UserphotosService } from './userphotos.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public people$:Observable<any>;
  public photos$:Observable<any>;

  constructor( private peopleService: PeopleService, private photosService: PhotoserviceService, public usersphotosService: UserphotosService ) { }

  

  ngOnInit() {
    this.people$ =  this.peopleService.fetchPeople();
    this.photos$ =  this.photosService.fetchPhotos();
    this.usersphotosService.getAllData().subscribe( data => {
      console.log(data);
      const users = data[0];
      const photos = data[1];

      const dataUser = users.map(user => {
       const photoUser =  photos.filter(photo => {
          return  photo.id === user.id;
        });
        return {
          user,
          photoUser
        }
      })
      console.log(dataUser);
    })
  }

}
