// import {Injectable} from '@angular/core';

import {Optional, Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';


interface MainData {
  userAuthorized: boolean;
}

@Injectable()
export class SecurityService {
  constructor() {

  }
  public userDataUpdated = new EventEmitter();

  public mainData:MainData =  {

    userAuthorized: !!window.localStorage.getItem('user')
  };

  public user = {
    name : '',
    pass : '',
  };


  public login(name: string, pass: string) {

    this.user.name = name;
    this.user.pass = pass;

    this.mainData.userAuthorized = true;

    this.userDataUpdated.emit(this.mainData.userAuthorized);

    window.localStorage.setItem('user', JSON.stringify(this.user) );
    alert("password: " + pass + "\n" + "login name: " + name);

  }

  public isUserAuthorized() {

    return this.mainData.userAuthorized;

  }

  public getUser() {

    return this.user;

  }
}

