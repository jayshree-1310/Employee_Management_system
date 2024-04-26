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
  isLoggedIn() {
    return localStorage.getItem('email') != null;
  }
  addEmployee(formData: any) {
    return this.http.post('http://localhost:9090/api/addEmployee', formData);
  }
  loginEmployee(body: any) {
    return this.http.post('http://localhost:9090/api/loginEmployee', body);
  }
  getAllEmployee() {
    return this.http.get('http://localhost:9090/api/getAllEmployee');
  }
  getUserByEmail(email: any) {
    return this.http.get('http://localhost:9090/api/employee' + '/' + email);
  }
  getAllEmployeePage(pageNumber: any) {
    return this.http.get(
      'http://localhost:9090/api/getAllEmployeePage/' + pageNumber
    );
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
  getSearchedEmployee(keyword: any, pageNumber: any) {
    return this.http.get(
      'http://localhost:9090/api/getSearchedEmployee/' +
        keyword +
        '/' +
        pageNumber
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
