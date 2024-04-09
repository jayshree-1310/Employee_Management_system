import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getEmployeeByEmail(email: string): Observable<any> {
    return this.http.get<any>(`http://localhost:9090/api/employee/${email}`);
  }
}
