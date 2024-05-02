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
import { ToastrService } from 'ngx-toastr';

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
  toast: ToastrService = inject(ToastrService);
  userData: any;
  constructor(private router: Router) {
    localStorage.clear();
  }
  ngOnInit(): void {
    this.authService.isAdminSubject.next(false);
    this.authService.isEmployeeSubject.next(false);
  }
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

  submitLoginForm() {
    this.authService.loginEmployee(this.loginform.value).subscribe({
      next: (res) => {
        this.userData = res;
        if (this.userData.status) {
          if (this.userData.role === 'admin') {
            localStorage.setItem('email', this.userData.email);
            localStorage.setItem('role', this.userData.role);
            this.authService.onLoggedIn();
            this.router.navigate(['/admin/adminDashboard']);
            this.toast.success('Loggedin Successfully', 'Welcome ', {
              timeOut: 3000,
              closeButton: true,
            });
          } else {
            localStorage.setItem('email', this.userData.email);
            localStorage.setItem('role', this.userData.role);
            this.authService.onLoggedIn();
            this.router.navigate(['/employee/employeeDashboard']);
            this.toast.success('Loggedin Successfully', 'Welcome ', {
              timeOut: 3000,
              closeButton: true,
            });
          }
        } else {
          if (this.userData.message == 'Not Match') {
            this.toast.error(
              'Invalid Credential',
              'Invalid Email or Password',
              {
                timeOut: 3000,
                closeButton: true,
              }
            );
          }
          if (this.userData.message == 'Not Exist') {
            this.toast.error(
              'Register First Before login',
              "User Doesn't Exist",
              {
                timeOut: 3000,
                closeButton: true,
              }
            );
          }
        }
      },
      error: (err) => {
        this.toast.error('Register First Before login', "User Doesn't Exist", {
          timeOut: 3000,
          closeButton: true,
        });
      },
    });
  }
}
