/**
 * Created by iKrok-PC7 on 12.08.2016.
 */
import {Component} from '@angular/core';

import {
  ROUTER_DIRECTIVES,
  provideRouter,
  RouterConfig,
} from '@angular/router';


@Component({
  selector: 'todo',
  templateUrl: '/app/directives/todo/todo.tmpl.html',
})
export class TodoComponent {

  private newTodo = "";
  public todoCollection:any = [];

  constructor() {

  }

  addTodo() {
    let todoObj = {
      newTodo: this.newTodo,
      complete: false
    };
    this.todoCollection.push(todoObj);
    this.newTodo = '';
    //event.preventDefault();
  }
  deleteTodo(index:number) {
    this.todoCollection.splice(index, 1);
  }

}
