
import { Component } from '@angular/core';

import {LoginComponent} from './directives/login/login'
import {HeaderComponent} from './directives/customHeader/customHeader'
import {TableComponent} from './directives/customTable/customTable'

import {TodoComponent} from './directives/todo/todo'

@Component({
  selector: 'my-app',
  templateUrl:'/app/pages/main.html',
  directives:[LoginComponent,HeaderComponent,TableComponent,TodoComponent]
})


export class AppComponent {
  title = 'Tour s Heroes';
  data = {
    users:[{pass: 11, name: 'Mr. Nice'},
      {pass: 20, name: 'Tornado'}]
  }
}
