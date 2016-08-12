import {Component} from '@angular/core';
export class User {
  pass: number;
  name: string;
}
@Component({
  selector: 'login-component',
  template: `
    <h1>{{title}}</h1>
   
    <div style="padding-bottom: 100px">
      <label>Name user: </label>
      <input [(ngModel)]="user.name" placeholder="name">
      
      
      
       <label>Password: </label>
       <input [(ngModel)]="user.pass" placeholder="pass">
      
       <button (click)="login()">Login</button>
    </div>
   
    `
})
export class LoginComponent {
  title = 'Login';
  user: User = {
    pass: 11,
    name: 'MAXEM'
  };

  login() {
    alert("password: " + this.user.pass + "\n" + "login name: " + this.user.name)
  }

}
