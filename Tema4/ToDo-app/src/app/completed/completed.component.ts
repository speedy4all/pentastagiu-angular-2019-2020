import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  completedList = ['Cumparaturi','ITP','Platit rata masina'];
  @Input() activeList;
  @Output() completed = new EventEmitter<any>();
  toggle = false;
  icon = 'fa fa-caret-down';
  constructor() { }

  ngOnInit() {
    this.completed.emit(this.completedList);
  }

  onAdd(i){
    let removedItem = this.completedList.splice(i,1);
    this.activeList.push(removedItem);

  }
  
  onDelete(i){
    this.completedList.splice(i,1);
  }
  
  toggler(){
    this.toggle =! this.toggle;
    (this.toggle) ? this.icon = 'fa fa-caret-up' : this.icon = 'fa fa-caret-down';
  }
}
