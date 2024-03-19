import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private http: HttpClient, private _router: Router) { }
  login()
  {
    localStorage.setItem('token','xhja787')
  }
}
