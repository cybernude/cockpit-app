import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
// import { Promise } from 'core-js/library/web/timers';

import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceService {

  constructor(
      @Inject('API_URL') private url: string,
      private http: Http
  ) { }

  getAllUser() {
      return new Promise((resolv, reject) => {
          this.http.get(`${this.url}/users`)
          .map(res => res.json())
          .subscribe(data => {
              resolv(data);
          }, error => {
              reject(error);
          })
      })
  }

}
