import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phone-book.component';

@Pipe({
  name: 'sortFirst'
})
export class SortFirstPipe implements PipeTransform {

  transform(value: IContact[],type:boolean):IContact[] {
    if(!value) return[];
    if(type){
      return value.sort((a, b) => (a.firstN > b.firstN) ? 1 : (a.firstN < b.firstN) ? -1 : 0);
    }
    return value.sort((a, b) => (a.firstN < b.firstN) ? 1 : (a.firstN > b.firstN )? -1 : 0);
}
  

}
