import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSpaces'
})
export class AddSpacesPipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined || value === null) {
      return '';
    }

    let newStr = '';

    for (let i = 0; i < value.length; i++) {
      if ((i + 1) % 3 === 0) {
        newStr += value.charAt(i) + ' ';
      } else {
        newStr += value.charAt(i);
      }
    }

    return newStr;
  }

}
