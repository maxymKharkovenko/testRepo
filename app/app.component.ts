import {Component} from 'angular2/core';

import { RouterLink, RouteParams } from 'angular2/router';

/*header*/
import {HeaderComponent} from './directives/mainHeader'

import {TestComponent} from './app.module'
import {TodoComponent} from './directives/todo'
import {UsersComponent} from './directives/users'


import {UserService} from './services/userSvc'

import {Logger} from './services/userSvc'


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';




import { routing,
    appRoutingProviders } from './app.routing';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        TodoComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})



const USERS = [
    {pass: 11, name: 'Mr. Nice'},
    {pass: 20, name: 'Tornado'}
];

@Component({
    selector: 'my-app',
    providers: [UserService, Logger],
    templateUrl: '/app/pages/main.html',
    directives: [TestComponent, TodoComponent, UsersComponent, HeaderComponent],
    declarations: [
        TodoComponent,
    ],
})

export class AppComponent {

    private newTodo = "";
    private todos = [];
    public data = {
        users: USERS
    };

    public userSvc = UserService;

    /*
     constructor(userService: UserService) {
     this.user = userService.getCurrent();
     }*/


    constructor() {
    }


    testService() {
        console.log(this.userSvc)
    }

    addTodo(event) {
        let todoObj = {
            newTodo: this.newTodo,
            complete: false
        };
        this.todos.push(todoObj);
        this.newTodo = '';
        event.preventDefault();
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }

}