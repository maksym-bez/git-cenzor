import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phone-book.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IContact[],field:string): IContact[] {
    if(!value) return[];
    if(!field) return value;
    return value.filter(book=>book.firstN.toLowerCase().includes(field.toLowerCase()) ||
                              book.lastN.toLowerCase().includes(field.toLowerCase())  ||
                              book.phoneN.toLowerCase().includes(field.toLowerCase()))
  }

}
