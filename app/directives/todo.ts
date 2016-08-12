import {Component} from 'angular2/core';

import {
    ROUTER_DIRECTIVES,
    provideRouter,
    RouterConfig,
} from '@angular/router';


@Component({
    selector: 'todo',
    templateUrl: '/app/directives/templates/todo.tmpl.html',
})
export class TodoComponent {

    private newTodo = "";
    private todos  = [];

    constructor() {

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