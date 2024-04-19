import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private http: HttpClient) {}
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
    return this.http.post('http://localhost:9090/api/markAttendace', payload);
  }
  getAttendancesByDate(date: any) {
    return this.http.get(
      'http://localhost:9090/api/getAttendanceByDate' + '/' + date
    );
  }
  getAttendancesByDatePage(date: any, pageNumber: any) {
    return this.http.get(
      'http://localhost:9090/api/getAttendanceByDatePage/' +
        pageNumber +
        '/' +
        date
    );
  }
  getSearchedAttendance(keyword: any, pageNumber: any, date: any) {
    return this.http.get(
      'http://localhost:9090/api/getSearchedAttendance/' +
        keyword +
        '/' +
        pageNumber +
        '/' +
        date
    );
  }
}
