import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  childTitle: string;

  @Input()
  set title(title: string) {
    this.childTitle = (title && title !== 'pentastagiu')? title : '';
  }

  @Output()
  changed = new EventEmitter<boolean>();

  constructor() {
    this.title = '';
  }

  ngOnInit() {
  }

}
