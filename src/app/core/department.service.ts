import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}
  addDepartment(dept: any) {
    return this.http.post('http://localhost:9090/api/addDepartment', dept);
  }
  getAllDepartment() {
    return this.http.get('http://localhost:9090/api/getAllDepartment');
  }
  getAllDepartmentPage(pageNumber: any) {
    return this.http.get(
      'http://localhost:9090/api/getAllDepartmentPage/' + pageNumber
    );
  }
  deleteDepartment(id: any) {
    return this.http.delete(
      'http://localhost:9090/api/deleteDepartment' + '/' + id
    );
  }

  editDepartment(id: string, data: any) {
    return this.http.patch(
      'http://localhost:9090/api/editDepartment' + '/' + id,
      data
    );
  }
  getSearchedDepartment(keyword: any, pageNumber: any) {
    return this.http.get(
      'http://localhost:9090/api/getSearchedDepartment/' +
        keyword +
        '/' +
        pageNumber
    );
  }
}
