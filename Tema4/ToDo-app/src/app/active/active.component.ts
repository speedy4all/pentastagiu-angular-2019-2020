import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  activeList=['Sedinta auto','Antrenament fotbal','Programare la doctor'];
  @Input() completedList;
  constructor() { }

  ngOnInit() {
  }
   onDelete(i){
     this.activeList.splice(i,1);
   }
   onCheckOff(i){
     let removedItem = this.activeList.splice(i,1);
     this.completedList.push(removedItem);
   }
   onAdd(item){
     this.activeList.push(item);
   }
   
  }