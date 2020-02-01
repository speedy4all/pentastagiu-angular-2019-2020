import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title = 'Parent component';
  value: string;

  constructor(public messageS: MessageService) { }

  ngOnInit() {

  }

  send() {
    this.messageS.setMessage(this.value);

  }

}
