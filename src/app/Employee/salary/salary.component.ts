import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { OnInit } from '@angular/core';
import { EmployeeService } from '../../core/employee-service.service';
@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [],
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent implements OnInit {
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
