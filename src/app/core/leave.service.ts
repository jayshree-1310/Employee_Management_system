// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LeaveService {

//   constructor() { }
// }
// leave.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'http://example.com/api/'; // we will replace this with  API URL after springboot

  constructor(private http: HttpClient) { }

  getLeaveRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}leave-requests`);
  }

  approveLeaveRequest(leaveRequestId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}leave-requests/${leaveRequestId}/approve`, {});
  }

  rejectLeaveRequest(leaveRequestId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}leave-requests/${leaveRequestId}/reject`, {});
  }



  private baseUrl = 'your-api-base-url';
  applyLeaveRequest(leaveRequestData: any): Observable<any> {
    const url = `${this.baseUrl}/apply-leave`;
    return this.http.post(url, leaveRequestData);
  }
}
