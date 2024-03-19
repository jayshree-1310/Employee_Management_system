import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css',
})
export class RegistrationformComponent {
  roleOptions = [
    'HR',
    'Fullstack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Cloud',
  ];

  registrationForm = new FormGroup({
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
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z ]*$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z ]*$/),
    ]),
    contact: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      ),
    ]),
    gender: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    company: new FormControl(''),
    experience: new FormControl(''),
    salary: new FormControl(''),
  });
  get id(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }
  get firstName(): FormControl {
    return this.registrationForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.registrationForm.get('lastName') as FormControl;
  }
  get gender(): FormControl {
    return this.registrationForm.get('gender') as FormControl;
  }
  get dob(): FormControl {
    return this.registrationForm.get('dateOfBirth') as FormControl;
  }
  get department(): FormControl {
    return this.registrationForm.get('department') as FormControl;
  }
  get image(): FormControl {
    return this.registrationForm.get('image') as FormControl;
  }
  get contact(): FormControl {
    return this.registrationForm.get('contact') as FormControl;
  }
  get company(): FormControl {
    return this.registrationForm.get('company') as FormControl;
  }
  get experience(): FormControl {
    return this.registrationForm.get('experience') as FormControl;
  }
  get salary(): FormControl {
    return this.registrationForm.get('salary') as FormControl;
  }
  submitregistrationForm() {}
}
