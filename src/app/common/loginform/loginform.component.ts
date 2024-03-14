<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
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
=======
import { Component } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 33d25014b94900da39b4f20c16734f3c4f79143a

@Component({
  selector: 'app-loginform',
  standalone: true,
<<<<<<< HEAD
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
  ],
=======
  imports: [],
>>>>>>> 33d25014b94900da39b4f20c16734f3c4f79143a
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css',
})
export class LoginformComponent {
<<<<<<< HEAD
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
  submitLoginForm() {}
=======

>>>>>>> 33d25014b94900da39b4f20c16734f3c4f79143a
}
