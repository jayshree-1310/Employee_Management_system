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
  providedIn: 'root',
})
export class LeaveService {
  constructor(private http: HttpClient) {}

  submitLeaveRequest(leaveRequest: any) {
    return this.http.post<any>(
      'http://localhost:9090/api/leaveRequest',
      leaveRequest
    );
  }
  getPendingLeaveRequests() {
    return this.http.get<any[]>('http://localhost:9090/api/pendingLeaves');
  }
  getPendingLeavesRequestsPage(pageNumber: any) {
    return this.http.get<any[]>(
      'http://localhost:9090/api/pendingLeavesPage/' + pageNumber
    );
  }
  getSearchedLeave(keyword: any, pageNumber: any) {
    return this.http.get<any[]>(
      'http://localhost:9090/api/getSearchedLeave/' + keyword + '/' + pageNumber
    );
  }
  getAllSearchedLeave(keyword: any, pageNumber: any) {
    return this.http.get<any[]>(
      'http://localhost:9090/api/getAllSearchedLeave/' +
        keyword +
        '/' +
        pageNumber
    );
  }
  approveLeaveRequest(requestId: any) {
    return this.http.post<any>(
      'http://localhost:9090/api/approveLeave' + '/' + requestId,
      {}
    );
  }
  rejectLeaveRequest(requestId: any) {
    return this.http.post<any>(
      'http://localhost:9090/api/rejectLeave' + '/' + requestId,
      {}
    );
  }
  getAllLeave() {
    return this.http.get<any[]>('http://localhost:9090/api/getAllLeave');
  }
  getAllLeavePage(pageNumber: any) {
    return this.http.get(
      'http://localhost:9090/api/getAllLeavePage/' + pageNumber
    );
  }

  getLeaveRequestsOfEmployee(email: any) {
    return this.http.get(
      'http://localhost:9090/api/getLeaveRequestsOfEmployee' + '/' + email
    );
  }
}
