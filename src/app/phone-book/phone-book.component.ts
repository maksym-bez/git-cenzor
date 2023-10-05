import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent {
  public phoneBook: IContact[] = [
    {
      firstN: 'Sofia',
      lastN: 'Zhuk',
      phoneN: '0977777777',
    },
    {
      firstN: 'Ira',
      lastN: 'Tutar',
      phoneN: '0636666666',
    },
    {
      firstN: 'Vasylyna',
      lastN: 'Vrublevska',
      phoneN: '0635555555',
    },
    {
      firstN: 'Alejandro',
      lastN: 'Del Rio Albrechet',
      phoneN: '0633333333',
    },
    {
      firstN: 'Petro',
      lastN: 'Petriv',
      phoneN: '0631222222',
    },
    {
      firstN: 'Petya',
      lastN: 'Zhuk',
      phoneN: '0631111111',
    },
  ];

  public modal = false;
  public indeX!: any;
  public isColor = false;
  public sortF = true;
  public hideF = false;
  public sortL = true;
  public hideL = false;
  public sortP = true;
  public hideP = false;
  public field = ''


  public newContact = {
    firstN: '',
    lastN: '',
    phoneN: '',
  };
  public regExp = {
    fname: /^[\w \-]{2,20}$/,
    lname: /^[\w \-]{2,20}$/,
    phoneN: /^[\d\+]{6,13}$/,
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.field);
    
  }
 
  firstSort(): void {
    this.hideF = true;
    this.sortF = !this.sortF;
    this.hideL = !this.hideF;
    this.hideP = !this.hideF;
  }
  lastSort(): void {
    this.hideL = true;
    this.sortL = !this.sortL;
    this.hideF = !this.hideL;
    this.hideP = !this.hideL;
   }
  phoneSort(): void {
    this.hideP = true;
    this.sortP = !this.sortP;
    this.hideL = !this.hideP;
    this.hideF = !this.hideP;
  }
  AddPhone(): void {
    this.modal = true;
  }
  editBtn(index: number): void {
    this.modal = true;
    this.indeX = index;
    this.newContact.firstN = this.phoneBook[index].firstN;
    this.newContact.lastN = this.phoneBook[index].lastN;
    this.newContact.phoneN = this.phoneBook[index].phoneN;
  }
  deleteUser(index: number): void {
    this.phoneBook.splice(index, 1);
  }
  saveModal(): void {
    if (
      this.regExp.fname.test(this.newContact.firstN) &&
      this.regExp.lname.test(this.newContact.lastN) &&
      this.regExp.phoneN.test(this.newContact.phoneN)
    ) {
      this.isColor = false;
      this.modal = false;
      if (this.indeX === undefined) {
        let newUser = {
          firstN: this.newContact.firstN,
          lastN: this.newContact.lastN,
          phoneN: this.newContact.phoneN,
        };
        this.phoneBook.push(newUser);
      } else {
        this.phoneBook[this.indeX].firstN = this.newContact.firstN;
        this.phoneBook[this.indeX].lastN = this.newContact.lastN;
        this.phoneBook[this.indeX].phoneN = this.newContact.phoneN;
      }
    } else {
      this.isColor = true;
      return;
    }
    this.resetInput();
    this.indeX = undefined;
  }
  closeModal(): void {
    this.modal = false;
    this.isColor = false;
    this.indeX = undefined;
    this.resetInput();
  }
  resetInput(): void {
    this.newContact.firstN = '';
    this.newContact.lastN = '';
    this.newContact.phoneN = '';
  }
}
export interface IContact {
  firstN: string;
  lastN: string;
  phoneN: string;
}
