import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addSpace'
})
export class AddSpacePipe implements PipeTransform {

  transform(value: string): string {
    let newString = '';
    let counter = 0;
    for (const char of value) {
      if (counter % 3 === 0) {
        newString += ' ' + char;
      } else {
        newString += char;
      }
      counter++;
    }
    return newString;
  }
}
