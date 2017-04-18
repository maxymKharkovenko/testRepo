import {Component} from '@angular/core';
import {SecurityService} from '../../services/securitySvc';


export class User {
  pass: string;
  name: string;
}
@Component({
  selector: 'login-component',
  providers: [],
  styleUrls: ['app/directives/login/login-component.css'],
  templateUrl:'/app/directives/login/login.tmpl.html',
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
