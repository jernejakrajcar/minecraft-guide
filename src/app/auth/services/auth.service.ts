import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "/api/users";

  constructor(private http: HttpClient ) { }

    login(model: any) {

      return this.http.get(this.authUrl, model).pipe(
        map((response: any) => {
          const user = response;
          console.log(user.email);
          if(user.result.succeeded) {
            localStorage.setItem('email', user.email);
          }
        })
      );
    }

    register(model: any) {
      return this.http.post(this.authUrl, model);
    }

    resetPassword(model: any) {
      return this.http.post(this.authUrl, model);
    }



}
