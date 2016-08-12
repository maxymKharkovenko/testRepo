import {Component} from 'angular2/core';

/*security svc*/
import {SecurityService} from '../services/securitySvc';

@Component({
    selector: 'main-header',
    providers: [SecurityService],
    templateUrl: '/app/directives/templates/header.tmpl.html',
})


export class HeaderComponent {

    private login;

    constructor(private SecurityService: SecurityService) {

    }
    onLogin (){
        this.SecurityService.login();
        window.location.href = 'todo'
    }
}