import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  public top = 'cenzor__top';
  public topText = 'Angular list of prohibited words';
  public cenzor = 'cenzor__main';
  public bad = 'cenzor__bad';
  public badWords = 'Java tottenham';
  public placeholder = 'word here..';
  public placeholderTextarea = 'text here..';
  public inputText = 'cenzor__input';
  public textarea = 'cenzor__textarea';
  public btnAdd = 'cenzor__btn cenzor__add';
  public btnReset = 'cenzor__btn cenzor__reset';
  public btnCenzor = 'cenzor__btn cenzor__cenzor';

  public inputWords!: string;
  public textareaText!: string;
  public isInput = true;
  public isText = true;

  constructor() {}

  ngOnInit(): void {}

  addWords(): void {
    if (this.inputWords) {
      this.badWords += ' ' + this.inputWords;
      this.inputWords = '';
      this.isInput = true;
      this.placeholder = 'word here..';
    } else {
      this.isInput = false;
      this.placeholder = 'Please write a word!';
    }
  }
  resetWords(): void {
    this.badWords = ' ';
    this.inputWords = '';
    this.textareaText = '';
  }
  cenzorBtn(): void {
    console.log(this.textareaText);
    if (this.textareaText) {
      this.checkBadWords()
      this.isText = true;
      this.placeholderTextarea = 'text here..';
    } else {
      this.isText = false;
      this.placeholderTextarea = 'Please write a text!';
    }
  }
  checkBadWords():void{
    let text = this.textareaText.split(' ')
    let words = this.badWords.split(' ')
   
    words.map(bad => {
      text = text.map(word => (word.toLowerCase() === bad) 
        ? word = word.split('').map(letter => letter = '*').join('') 
        : word)
    })
    this.textareaText = text.join(' ');
    console.log(text.join(' '));
    
  }
}
