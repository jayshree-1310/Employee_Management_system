import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../../core/employee-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-profile',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatButtonModule,
  ],
  templateUrl: './emp-profile.component.html',
  styleUrl: './emp-profile.component.css',
})
export class EmpProfileComponent implements OnInit{
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const email = params['email']; 
      this.employeeService.getEmployeeByEmail(email).subscribe((data) => {
        this.employee = data;
      });
    });
  }
}
