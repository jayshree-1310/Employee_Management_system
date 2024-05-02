import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:9090/api';
  markAttendace(
    employeeIds: number[],
    presentDate: any,
    present: boolean,
    halfDay: boolean
  ) {
    const payload = {
      employeeIds: employeeIds,
      presentDate: presentDate,
      present: present,
      halfDay: halfDay,
    };
    return this.http.post(this.url + '/markAttendace', payload);
  }
  getAttendancesByDate(date: any) {
    return this.http.get(this.url + '/getAttendanceByDate' + '/' + date);
  }
  getAttendancesByDatePage(date: any, pageNumber: any) {
    return this.http.get(
      this.url + '/getAttendanceByDatePage/' + pageNumber + '/' + date
    );
  }
  getSearchedAttendance(keyword: any, pageNumber: any, date: any) {
    return this.http.get(
      this.url +
        '/getSearchedAttendance/' +
        keyword +
        '/' +
        pageNumber +
        '/' +
        date
    );
  }
}
