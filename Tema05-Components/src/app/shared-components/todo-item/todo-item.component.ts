import { Component, OnInit, Output,  EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  @Output() deleteEvent = new EventEmitter<boolean>();
  @Output() doneEvent = new EventEmitter<boolean>();
  @Input() task: string;
  active = true;

  constructor() {

  }

  deleteTask(action: boolean){
    this.deleteEvent.emit(action);
  }

  doneTask(action: boolean){
    this.doneEvent.emit(true);
  }

  //Deactivated the Done button here - maybe not the best implementation but data binding didn't work here because of ngFor
  ngOnInit(): void {
    if(this.task.includes("DONE")){
      this.active = false;
    }
  }
}

