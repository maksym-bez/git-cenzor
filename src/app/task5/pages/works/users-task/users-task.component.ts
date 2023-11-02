import { Component } from '@angular/core';

@Component({
  selector: 'app-users-task',
  templateUrl: './users-task.component.html',
  styleUrls: ['./users-task.component.scss']
})
export class UsersTaskComponent{
  public errorLogin!: boolean;
  public errorPass!: boolean;
  public errorEmail!: boolean;
  public loginName!: string;
  public passName!: string;
  public emailName!: string;
  public statusBtn = false;
  public editIndex!: number;
  public regExp = {
    login: /^\w{4,16}$/i,
    pass: /^[a-z|0-9|\.|_|-]{4,16}$/i,
    email: /\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,5}/,
  };
  public user ={
    login: '',
    pass: '',
    email: ''
  }
  public usersData: Array<{
    login: string;
    pass: string;
    email: string;
  }> = [];

  constructor() {}

  ngOnInit(): void {}

  loginCheck(): void {
    if (this.regExp.login.test(this.user.login)) {
      this.errorLogin = false;
    } else {
      this.errorLogin = true;
    }
  }
  passCheck(): void {
    if (this.regExp.pass.test(this.user.pass)) {
      this.errorPass = false;
    } else {
      this.errorPass = true;
    }
  }
  emailCheck(): void {
    if (this.regExp.email.test(this.user.email)) {
      this.errorEmail = false;
    } else {
      this.errorEmail = true;
    }
  }
  addUser(): void {
    if (
      this.regExp.pass.test(this.user.pass) &&
      this.regExp.email.test(this.user.email) &&
      this.regExp.login.test(this.user.login)
    ) {
      this.usersData.push(this.render());
      console.log(this.usersData);
      this.clearInput();
    }
  }
  deleteUser(index: number): void {
    this.usersData.splice(index, 1);
  }
  editUser(index: number): void {
    this.user.login = this.usersData[index].login;
    this.user.pass = this.usersData[index].pass;
    this.user.email = this.usersData[index].email;
    this.statusBtn = true;
    this.editIndex = index;
  }
  saveEditUser(): void {
    this.statusBtn = false;
    this.usersData[this.editIndex].login = this.user.login;
    this.usersData[this.editIndex].pass = this.user.pass;
    this.usersData[this.editIndex].email = this.user.email;
    this.clearInput();
  }
  render() {
    return {
      login: this.user.login,
      pass: this.user.pass,
      email: this.user.email,
    };
  }
  clearInput(): void {
    this.user.login = '';
    this.user.pass = '';
    this.user.email = '';
  }
}
