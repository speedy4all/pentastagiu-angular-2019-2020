import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value: string): string {
    let newStr = '';
    for(let i=0; i<value.length;i++) {
        if(i%3==0) {
          newStr += " ";
        }
        newStr += value.charAt(i);
    }
    return newStr;
  }

}
