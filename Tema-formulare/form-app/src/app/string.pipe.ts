import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

   transform(value: string): string {
    let newString='';
      for (let i=0; i<value.length; i++) {
        if (i%3 === 0) {
          newString += ' ';
        }
        newString += value[i];
      }
      return newString;
  }

}
