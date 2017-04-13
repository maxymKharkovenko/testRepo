import {Component} from '@angular/core';
import {SecurityService} from '../../services/securitySvc';


export class User {
  pass: string;
  name: string;
}
@Component({
  selector: 'login-component',
  providers: [SecurityService],
  styleUrls: ['/app/directives/login-component.css'],
  template: `
    <div class="login-block">
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="user.name" placeholder="Username" id="username" />
        <input type="password" [(ngModel)]="user.pass" placeholder="Password" id="password" />
        <button (click)="login()">Submit</button>
    </div>
    `
})

export class LoginComponent {
  constructor(private SecurityService: SecurityService) {

  }


  title = 'Login';
  user: User = {
    pass: 'asd',
    name: 'MAXEM'
  };

  login() {
    this.SecurityService.login(this.user.name, this.user.pass);
  }

}
