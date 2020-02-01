import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() name: string;
  parentMessage: string;
  messageAsync: Observable<string>;
  destroy: Subscription;
  constructor(public message: MessageService) { }

  ngOnInit() {
    this.destroy = this.message.getMessage().subscribe( message => {
      this.parentMessage = message;
    });
    this.messageAsync = this.message.getMessage();

    console.log('this.message.getMessage()', this.message.getMessage());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnDestroy(): void {
    this.destroy.unsubscribe();
  }

}
