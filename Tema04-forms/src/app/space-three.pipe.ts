import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceThree'
})
export class SpaceThreePipe implements PipeTransform {

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
