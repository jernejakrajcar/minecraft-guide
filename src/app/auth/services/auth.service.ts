import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8080/api/users/";

  constructor(private http: HttpClient ) {  }

    login(email:string, password:string) {

      return this.http.post(this.authUrl, {email,password}).pipe(
        map((response: any) => {
          const user = response;
          localStorage.setItem('email', user.email);
        })
      );
    }


}
