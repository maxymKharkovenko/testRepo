import {Injectable} from 'angular2/core';


import {Optional, Injectable} from 'angular2/core';


@Injectable()
export class Logger {
    logs: string[] = [];

    log(message: string) {
        this.logs.push(message);
        console.log(message);
    }
}

@Injectable()
export class UserService {
    constructor(@Optional() private _logger: Logger) {
    } // Внедряем зависимость и сохраняем в приватном поле
    getCurrent() {
        this._logger.log('Получение пользователя...');
        return {username: 'Admin', email: 'admin@example.com'};
    }
}


interface User {
    username: string;
    email: string;
}
