import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../model/photo.interface';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
  @Input() public photo: Photo;
  public show: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  showMoreDetails() {
    this.show = !this.show;
  }

}
