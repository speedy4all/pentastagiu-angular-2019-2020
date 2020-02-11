import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parentTitle: string;

  constructor() {
    this.parentTitle = 'to do item title';
  }

  childChanged() {
    this.parentTitle = 'item resolved';
  }

  ngOnInit() {
  }

}
