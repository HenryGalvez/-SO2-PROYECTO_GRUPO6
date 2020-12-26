import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { baseURL } from './shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = baseURL+ 'user'

  constructor(private http: HttpClient,
    private router: Router) { }

  signUp(user) {
    return this.http.post(this.URL + '/signup',user);
  }

  signIn(user) {
    return this.http.post(this.URL + '/signin',user);
  }

  getInfo() {
    return this.http.get(this.URL + '/info');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/signin'])
  }
}
