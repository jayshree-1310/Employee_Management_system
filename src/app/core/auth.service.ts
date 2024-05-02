import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    if (this.getUserRole() === 'admin') {
      this.isAdminSubject.next(true);
    } else if (this.getUserRole() === 'employee') {
      this.isEmployeeSubject.next(true);
    }
    this.getUserByEmail(localStorage.getItem('email')).subscribe((value) => {
      this.userData = value;
    });
  }
  public isAdminSubject = new BehaviorSubject<boolean>(false);
  public isEmployeeSubject = new BehaviorSubject<boolean>(false);
  userData: any;
  url = 'http://localhost:9090/api';
  isLoggedIn() {
    return localStorage.getItem('email') != null;
  }
  addEmployee(formData: any) {
    return this.http.post(this.url + '/addEmployee', formData);
  }
  loginEmployee(body: any) {
    return this.http.post(this.url + '/loginEmployee', body);
  }
  getAllEmployee() {
    return this.http.get(this.url + '/getAllEmployee');
  }
  getUserByEmail(email: any) {
    return this.http.get(this.url + '/employee' + '/' + email);
  }
  getAllEmployeePage(pageNumber: any) {
    return this.http.get(this.url + '/getAllEmployeePage/' + pageNumber);
  }
  deleteEmployee(id: any) {
    return this.http.delete(this.url + '/deleteEmployee/' + id);
  }
  updateEmployee(id: any, formData: any) {
    return this.http.patch(this.url + '/updateEmployee/' + id, formData);
  }
  addSalary(id: string, formData: any) {
    return this.http.patch(this.url + '/addSalary' + '/' + id, formData);
  }
  getSearchedEmployee(keyword: any, pageNumber: any) {
    return this.http.get(
      this.url + '/getSearchedEmployee/' + keyword + '/' + pageNumber
    );
  }

  onLoggedIn() {
    this.getUserByEmail(localStorage.getItem('email')).subscribe((value) => {
      this.userData = value;
    });
    this.loginAsAdmin();
    this.loginAsEmployee();
  }
  getUserRole() {
    return localStorage.getItem('role') != null
      ? localStorage.getItem('role')?.toString()
      : '';
  }

  loginAsAdmin() {
    if (this.getUserRole() === 'admin') {
      this.isAdminSubject.next(true);
    } else {
      this.isAdminSubject.next(false);
    }
  }
  loginAsEmployee() {
    if (this.getUserRole() === 'employee' && this.isLoggedIn()) {
      this.isEmployeeSubject.next(true);
    } else {
      this.isEmployeeSubject.next(false);
    }
  }
  logOutAdmin() {
    localStorage.clear();
    this.isAdminSubject.next(false);
  }
  logOutEmployee() {
    localStorage.clear();
    this.isEmployeeSubject.next(false);
  }
}
