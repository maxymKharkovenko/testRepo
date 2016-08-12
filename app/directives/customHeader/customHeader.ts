import {Component} from '@angular/core';

/*security svc*/
import {SecurityService} from '../../services/securitySvc';

@Component({
  selector: 'main-header',
  providers: [SecurityService],
  templateUrl: '/app/directives/customHeader/header.tmpl.html',
})


export class HeaderComponent {



  constructor(private SecurityService: SecurityService) {

  }
  onLogin (){
    this.SecurityService.login();
    window.location.href = 'todo'
  }
}
