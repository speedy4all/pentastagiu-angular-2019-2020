import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataPipes';
  formular1;
  constructor() {}
  ngOnInit() {
    this.formular1 = new FormGroup({
      emailid: new FormControl("", [
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*"),
         Validators.minLength(1)
      ]),
      passwd: new FormControl("",
       [Validators.required,
       Validators.minLength(1)])
   });
  }
  onClickSubmit(data) {
    alert(`Datele introduse : \n Nume: ${data.nume} \n Prenume ${data.prenume} \n Email: ${data.email}\n Telefon: ${data.telefon}`);
 }

 onSubmit(data) {
  alert(`Datele introduse : \n Email: ${data.emailid} \n Parola: ${data.passwd}`);
}

}

@Pipe({
  name: 'space3'
})
export class SpaceThree implements PipeTransform {

  transform(value: string): any {
    let newStr = '';
    for(let i = 0; i < value.length; i++){
      if(i%3 == 0){
        newStr += ' ';
      }
      newStr += value.charAt(i);
    }
    return newStr;
  }
}