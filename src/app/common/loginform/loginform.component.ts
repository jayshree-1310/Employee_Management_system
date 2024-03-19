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
import { LoginAuthService } from '../../login-auth.service';

export const data = [
  {
    email: 'admin@gmail.com',
    password: 'Admin@123',
    role: 'admin',
  },
  {
    email: 'employee@gmail.com',
    password: 'Employee@123',
    role: 'employee',
  },
  {
    email: 'emp3@gmail.com',
    password: 'emp3',
  },
  {
    email: 'emp4@gmail.com',
    password: 'emp4',
  },
];

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
  logInAuthService: LoginAuthService = inject(LoginAuthService);
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
    let obj = data.find((o) => o.email === this.id.value);
    let isUser = this.password.value === obj?.password;
    if (!isUser) {
      this.authService.isAdmin.next(false);
      this.authService.isEmployee.next(false);
      alert('Invalid credentials');
      return;
    }
    if (obj?.role === 'admin') {
      this.authService.isAdmin.next(true);
      this.logInAuthService.login();
      this.router.navigate(['/adminDashboard']);
      return;
    } else {
      this.authService.isEmployee.next(true);
      this.router.navigate(['/employeeDashboard']);
      return;
    }
    this.authService.isAdmin.next(false);
    this.authService.isEmployee.next(false);
    alert('Invalid credentials');
  }
}
