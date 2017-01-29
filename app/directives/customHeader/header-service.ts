import {Injectable} from '@angular/core';


@Injectable()
export class headerService {
  constructor() {
  }

  getCurrent() {

    return {username: 'Admin', email: 'admin@example.com'};
  }
}
