// import {Injectable} from '@angular/core';

import {Optional, Injectable} from '@angular/core';


interface MainData {
  userAuthorized: boolean;
}

@Injectable()
export class SecurityService {
  constructor() {

  }

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

    window.localStorage.setItem('user', JSON.stringify(this.user) );
    alert("password: " + pass + "\n" + "login name: " + name);

  }

  public getUser() {

    return this.user;

  }
}

