import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-registrationform',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatButton],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css',
})
export class RegistrationformComponent {
  authService: AuthService = inject(AuthService);
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
  filetoUpload!: File;
  onChangeFileField(event: any) {
    this.filetoUpload = event.target.files[0];
  }
  submitregistrationForm() {
    const formData = new FormData();
    formData.append('fname', this.firstName.value);
    formData.append('lname', this.lastName.value);
    formData.append('email', this.id.value);
    formData.append('phone', this.contact.value);
    formData.append('gender', this.gender.value);
    formData.append('department', this.department.value);
    formData.append('dateOfBirth', this.dob.value);
    formData.append('file', this.filetoUpload);
    formData.append('company', this.company.value);
    formData.append('password', this.password.value);
    formData.append('experience', this.experience.value);
    formData.append('salary', this.salary.value);
    this.authService.addEmployee(formData).subscribe((res) => {
      console.log(res);
    });
  }
}
