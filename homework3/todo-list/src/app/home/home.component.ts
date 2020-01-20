import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemList = [
    {index: 1, name: 'Item 1'},
    {index: 2, name: 'Item 2'},
    {index: 3, name: 'Item 3'},
    {index: 4, name: 'Item 4'},
    {index: 5, name: 'Item 5'},
    {index: 6, name: 'Item 6'},
    {index: 7, name: 'Item 7'},
    {index: 8, name: 'Item 8'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
