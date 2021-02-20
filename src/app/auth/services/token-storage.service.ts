import { Injectable } from '@angular/core';

// const USER_ID = 'user_id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  // signOut(): void {
  //   window.sessionStorage.clear();
  // }
  //
  // public saveToken(user_id: string): void {
  //   window.sessionStorage.removeItem(USER_ID);
  //   window.sessionStorage.setItem(USER_ID, user_id);
  // }
  //
  // public getToken(): string {
  //   return sessionStorage.getItem(USER_ID);
  // }
  //
  // public saveUser(user): void {
  //   window.sessionStorage.removeItem(USER_ID);
  //   window.sessionStorage.setItem(USER_ID, JSON.stringify(user));
  // }
  //
  // public getUser(): any {
  //   return JSON.parse(sessionStorage.getItem(USER_ID));
  // }
}
