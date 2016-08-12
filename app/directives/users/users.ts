import {Component, Input} from '@angular/core';
import {ElementRef} from '@angular/core';
import {ContentChildren} from '@angular/core';
import {QueryList} from '@angular/core';

export class ListItem {}


@Component({
  selector: 'users-list',
  inputs: ['collection'],
  templateUrl: '/app/directives/users/users.tmpl.html',
})




export class UsersComponent {

  @ContentChildren(ListItem) items: QueryList<ListItem>;

  private isShowCollection = false;

  constructor(el: ElementRef) {
    el.nativeElement.querySelector('input').focus();
  }


  showAllUsers(){
    this.isShowCollection = !this.isShowCollection;
  }

}
