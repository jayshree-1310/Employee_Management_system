import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private _router: Router) {}
  public isAdmin = new BehaviorSubject<boolean>(false);
  public isEmployee = new BehaviorSubject<boolean>(false);
  logoutAdmin() {
    this.isAdmin.next(false);
    this._router.navigate(['/login'])
    localStorage.removeItem('token')
  }
  logoutEmployee() {
    this.isEmployee.next(false);
    this._router.navigate(['/login'])
    localStorage.removeItem('token')
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
