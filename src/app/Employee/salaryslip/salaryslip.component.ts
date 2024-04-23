import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { EmployeeService } from '../../core/employee-service.service';
import { AuthService } from '../../core/auth.service';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-salaryslip',
  standalone: true,
  imports: [RouterLink,
            MatCardModule,
            
  ],
  templateUrl: './salaryslip.component.html',
  styleUrl: './salaryslip.component.css'
})
export class SalaryslipComponent {
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
