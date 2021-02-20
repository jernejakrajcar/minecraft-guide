import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "/api/users/";

  constructor(private http: HttpClient ) { }

    login(model: any) {
      const current_id = localStorage.getItem('id');

      return this.http.get(this.authUrl + current_id, model).pipe(
        map((response: any) => {
          const user = response;
          console.log(response);
          console.log(user.data.email);
          var current_email = localStorage.getItem('email');
          var current_password = localStorage.getItem('password');
          if(user.data.email == current_email) {
            if(user.data.password == current_password) {
              console.log("Success!");
            }
            else {
              console.log("Wrong password");
            }

          }
          else {
            console.log("Please register first");
          }
        })
      );
    }

    register(model: any) {
      return this.http.post(this.authUrl, model).pipe(
        map((response: any) => {
          const user = response;
          localStorage.setItem('name', user.data.name);
          localStorage.setItem('email', user.data.email);
          localStorage.setItem('password', user.data.password);
          localStorage.setItem('id', user.data._id);
        })
      );
    }

    resetPassword(model: any) {
      return this.http.post(this.authUrl, model);
    }



}
