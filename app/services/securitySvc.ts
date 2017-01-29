// import {Injectable} from '@angular/core';

import {Optional, Injectable} from '@angular/core';

@Injectable()
export class SecurityService {
  constructor() {

  }

  public user = {
    name : '',
    pass : '',
  };

  public login(name: string, pass: string) {

    this.user.name = name;
    this.user.pass = pass;

    alert("password: " + pass + "\n" + "login name: " + name);

  }

  public getUser() {

    return this.user;

  }
}

