import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'space'
})
export class SpacePipe implements PipeTransform {

  transform(value: string): any {
    let newStr = '';
    for (let i = 0; i < value.length; i++) {
      if ( i % 3 === 0) {
        newStr += ' ';
      }
      newStr += value.charAt(i);
    }
    return newStr;
  }

}
