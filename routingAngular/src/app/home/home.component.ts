import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  classStyle: string;
  classBlack: string;
  condition = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.classStyle = 'buttonContent';
    this.classBlack = 'buttonContent2';
  }

  openDialog() {
    // this.dialog.open(DialogUserComponent);
    const dialog1 = this.dialog.open(DialogUserComponent, {
      width: '250px',
      disableClose: true,
      data: {name: this.classStyle}
    });
    dialog1.afterClosed().subscribe( data => {
      console.log('closedModal', data);
    });
  }

}
