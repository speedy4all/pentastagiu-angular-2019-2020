import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitString'
})
export class SplitStringPipe implements PipeTransform {

  transform(value: any) : any {

    let newStr = " ";
    for (let i = 0; i < value.length ; i++) {

      if (i % 3 == 0) {
        newStr += " ";
      }

      newStr += value[i];
    }
    return newStr;

  }
  

}
