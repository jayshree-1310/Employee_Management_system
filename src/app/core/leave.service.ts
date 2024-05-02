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
  url = 'http://localhost:9090/api';

  submitLeaveRequest(leaveRequest: any) {
    return this.http.post<any>(
      'http://localhost:9090/api/leaveRequest',
      leaveRequest
    );
  }
  getPendingLeaveRequests() {
    return this.http.get<any[]>(this.url + '/pendingLeaves');
  }
  getPendingLeavesRequestsPage(pageNumber: any) {
    return this.http.get<any[]>(this.url + '/pendingLeavesPage/' + pageNumber);
  }
  getSearchedLeave(keyword: any, pageNumber: any) {
    return this.http.get<any[]>(
      this.url + '/getSearchedLeave/' + keyword + '/' + pageNumber
    );
  }
  getAllSearchedLeave(keyword: any, pageNumber: any) {
    return this.http.get<any[]>(
      this.url + '/getAllSearchedLeave/' + keyword + '/' + pageNumber
    );
  }
  approveLeaveRequest(requestId: any) {
    return this.http.post<any>(
      this.url + '/approveLeave' + '/' + requestId,
      {}
    );
  }
  rejectLeaveRequest(requestId: any) {
    return this.http.post<any>(this.url + '/rejectLeave' + '/' + requestId, {});
  }
  getAllLeave() {
    return this.http.get<any[]>(this.url + '/getAllLeave');
  }
  getAllLeavePage(pageNumber: any) {
    return this.http.get(this.url + '/getAllLeavePage/' + pageNumber);
  }

  getLeaveRequestsOfEmployee(email: any) {
    return this.http.get(
      this.url + '/getLeaveRequestsOfEmployee' + '/' + email
    );
  }
}
