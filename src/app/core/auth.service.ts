import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  public isAdmin = new BehaviorSubject<boolean>(false);
  public isEmployee = new BehaviorSubject<boolean>(false);
  logoutAdmin() {
    this.isAdmin.next(false);
  }
  logoutEmployee() {
    this.isEmployee.next(false);
  }
}
