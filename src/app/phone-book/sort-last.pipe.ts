import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phone-book.component';

@Pipe({
  name: 'sortLast'
})
export class SortLastPipe implements PipeTransform {

  transform(value:IContact[],type:boolean): IContact[] {
    if(!value) return[];
    if(type){
      return value.sort((a, b) => (a.lastN > b.lastN) ? 1 : (a.lastN < b.lastN) ? -1 : 0);
    }
    return value.sort((a, b) => (a.lastN < b.lastN) ? 1 : (a.lastN > b.lastN )? -1 : 0);
  }

}