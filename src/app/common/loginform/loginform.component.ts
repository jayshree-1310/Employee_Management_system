import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Credentials {
  email: string;
  password: string;
}

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
export class LoginformComponent {
  
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
  



  credentials: Credentials = { email: '', password: '' };

  constructor(private router: Router) {}

  submitLoginForm() {
    

    if (this.credentials.email === 'admin@gmail.com' && this.credentials.password === 'Abcdef@09') {
      this.router.navigate(['/admin']);
    } else if (this.credentials.email === 'employee@gmail.com' && this.credentials.password == 'Abcdef@09') {
      this.router.navigate(['/emloyee']);
    } else {
      alert('Invalid credentials');
    }
  }
    
}
