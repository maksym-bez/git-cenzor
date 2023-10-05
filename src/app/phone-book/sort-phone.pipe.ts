import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phone-book.component';

@Pipe({
  name: 'sortPhone'
})
export class SortPhonePipe implements PipeTransform {

  transform(value: IContact[],type:boolean): IContact[] {
    if(!value) return[];
    if(type){
      return value.sort((a, b) => (a.phoneN > b.phoneN) ? 1 : (a.phoneN < b.phoneN) ? -1 : 0);
    }
    return value.sort((a, b) => (a.phoneN < b.phoneN) ? 1 : (a.phoneN > b.phoneN )? -1 : 0);
  }
}