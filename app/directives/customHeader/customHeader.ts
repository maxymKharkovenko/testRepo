import {Component} from '@angular/core';

/*security svc*/
import {SecurityService} from '../../services/securitySvc';

import { headerService } from './header-service';


@Component({
  selector: 'main-header',
  providers: [headerService],
  templateUrl: '/app/directives/customHeader/header.tmpl.html',
})


export class HeaderComponent {

  constructor(private SecurityService: SecurityService) {

  }
  isUserAuthorized: boolean = this.getData();

  getData (): boolean{
    return this.SecurityService.mainData.userAuthorized
  }
  onLogin (){
    this.isUserAuthorized = this.SecurityService.mainData.userAuthorized;
    console.log(this.SecurityService.mainData.userAuthorized);
  }
  onLogout (){
    this.isUserAuthorized = this.SecurityService.mainData.userAuthorized = false;
    localStorage.removeItem('user');
  }

  ngOnInit() {
    this.SecurityService.userDataUpdated.subscribe(
      (isUserAuthorized: any) => {
        this.isUserAuthorized = this.SecurityService.mainData.userAuthorized;
      }
    );
  }

}
