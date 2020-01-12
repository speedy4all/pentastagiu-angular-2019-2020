import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeSpace'
})
export class ThreeSpacePipe implements PipeTransform {

  transform(value: string): string {
    let newStr = '';
    for (let i = 0; i < value.length; i++) {
      if ((i % 3 === 0) && ( i > 0)) {
        newStr += ' ';
        newStr += value.charAt(i);
        i++;
      }
      newStr += value.charAt(i);
    }
    return newStr;
  }

}
