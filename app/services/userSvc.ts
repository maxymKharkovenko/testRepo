import {Injectable} from '@angular/core';


// import {Injectable} from '@angular/core';

/*

@Injectable()
export class Logger {
  logs: string[] = [];

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
*/

@Injectable()
export class UserService {
  constructor() {
  } // Внедряем зависимость и сохраняем в приватном поле
  getCurrent() {
    // this._logger.log('Получение пользователя...');
    return {username: 'Admin', email: 'admin@example.com'};
  }
}


interface User {
  username: string;
  email: string;
}
