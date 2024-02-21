import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth = false;

  constructor() {
    const auth = localStorage.getItem('auth');
    if (auth) {
      this._auth = true;
    }
  }

  get auth() {
    return this._auth;
  }

  login() {
    this._auth = true;
    localStorage.setItem('auth', 'loggedIn:)');
  }

  logout() {
    this._auth = false;
    localStorage.removeItem('auth');
  }
}
