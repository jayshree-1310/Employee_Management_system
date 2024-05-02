import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:9090/api';

  addDepartment(dept: any) {
    return this.http.post(this.url + '/addDepartment', dept);
  }
  getAllDepartment() {
    return this.http.get(this.url + '/getAllDepartment');
  }
  getAllDepartmentPage(pageNumber: any) {
    return this.http.get(this.url + '/getAllDepartmentPage/' + pageNumber);
  }
  deleteDepartment(id: any) {
    return this.http.delete(this.url + '/deleteDepartment' + '/' + id);
  }

  editDepartment(id: string, data: any) {
    return this.http.patch(this.url + '/editDepartment' + '/' + id, data);
  }
  getSearchedDepartment(keyword: any, pageNumber: any) {
    return this.http.get(
      this.url + '/getSearchedDepartment/' + keyword + '/' + pageNumber
    );
  }
}
