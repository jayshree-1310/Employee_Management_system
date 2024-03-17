import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css',
})
export class LoginformComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  loginform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$'
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,}$/
      ),
    ]),
  });
  get id(): FormControl {
    return this.loginform.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.loginform.get('password') as FormControl;
  }

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.authService.isAdmin.next(false);
    this.authService.isEmployee.next(false);
  }

  submitLoginForm() {
    if (
      this.id.value === 'admin@gmail.com' &&
      this.password.value === 'Admin@123'
    ) {
      this.authService.isAdmin.next(true);
      this.router.navigate(['/adminDashboard']);
    } else if (
      this.id.value === 'employee@gmail.com' &&
      this.password.value == 'Employee@123'
    ) {
      this.authService.isEmployee.next(true);
      this.router.navigate(['/employeeDashboard']);
    } else {
      this.authService.isAdmin.next(false);
      this.authService.isEmployee.next(false);
      alert('Invalid credentials');
    }
  }
}
