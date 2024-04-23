import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { EmployeeService } from '../../core/employee-service.service';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {
  employee: any; // Define the employee object to hold employee data

  constructor(private authService: AuthService,
    private employeeService: EmployeeService,
  ) { }

ngOnInit(): void {
  // Fetch employee data including salary
  this.employeeService
  .getEmployeeByEmail(localStorage.getItem('email'))
  .subscribe((data) => {
    this.employee = data;
  });
}
}

