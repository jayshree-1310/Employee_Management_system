import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  
  logoutAdmin() {
    this.isAdmin.next(false);
  }
  logoutEmployee() {
    this.isEmployee.next(false);
  }
}
