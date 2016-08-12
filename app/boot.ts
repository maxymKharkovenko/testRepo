import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {UserService} from './services/userSvc'



bootstrap(AppComponent, [UserService]);