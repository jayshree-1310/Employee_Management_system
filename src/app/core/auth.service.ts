import { Router } from '@angular/router';
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
    this._router.navigate(['/login']);
    localStorage.removeItem('token');
  }
  logoutEmployee() {
    this.isEmployee.next(false);
    this._router.navigate(['/login']);
    localStorage.removeItem('token');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  addEmployee(formData: any) {
    return this.http.post('http://localhost:9090/api/addEmployee', formData);
  }
  getAllEmployee() {
    return this.http.get('http://localhost:9090/api/getAllEmployee');
  }
  deleteEmployee(id: any) {
    return this.http.delete('http://localhost:9090/api/deleteEmployee/' + id);
  }
  updateEmployee(id: any, formData: any) {
    return this.http.patch(
      'http://localhost:9090/api/updateEmployee/' + id,
      formData
    );
  }
  addSalary(id: string, formData: any) {
    return this.http.patch(
      'http://localhost:9090/api/addSalary' + '/' + id,
      formData
    );
  }
}
