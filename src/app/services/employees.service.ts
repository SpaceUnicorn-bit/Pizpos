import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  public identity;
  public token;

  constructor(public _http: HttpClient) { }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  isLogged() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== null) {
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
}
