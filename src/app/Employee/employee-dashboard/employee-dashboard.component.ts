import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EmployeeService } from '../../core/employee-service.service';
import { AuthService } from '../../core/auth.service';
import { LeaveService } from '../../core/leave.service';
@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css',
})
export class EmployeeDashboardComponent implements OnInit {
  employee: any; // Define the employee object to hold employee data
  leaveService: LeaveService = inject(LeaveService);
  leaveData: any;
  constructor(
    private authService: AuthService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    // Fetch employee data including salary
    this.employeeService
      .getEmployeeByEmail(localStorage.getItem('email'))
      .subscribe((data) => {
        this.employee = data;
      });
    this.leaveService
      .getLeaveRequestsOfEmployee(localStorage.getItem('email'))
      .subscribe((res) => {
        this.leaveData = res;
      });
  }
}
