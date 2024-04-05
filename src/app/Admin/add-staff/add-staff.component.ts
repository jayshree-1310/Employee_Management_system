import { CommonModule, NgClass, TitleCasePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [NgClass, TitleCasePipe, ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css',
})
export class AddStaffComponent {
  roleOptions = [
    'HR',
    'Fullstack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Cloud',
  ];

  constructor(private http: HttpClient) {}
  addStaffForm = new FormGroup({
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
  get email(): FormControl {
    return this.addStaffForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.addStaffForm.get('password') as FormControl;
  }
  get firstName(): FormControl {
    return this.addStaffForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.addStaffForm.get('lastName') as FormControl;
  }
  get gender(): FormControl {
    return this.addStaffForm.get('gender') as FormControl;
  }
  get dob(): FormControl {
    return this.addStaffForm.get('dateOfBirth') as FormControl;
  }
  get department(): FormControl {
    return this.addStaffForm.get('department') as FormControl;
  }
  get image(): FormControl {
    return this.addStaffForm.get('image') as FormControl;
  }
  get contact(): FormControl {
    return this.addStaffForm.get('contact') as FormControl;
  }
  get company(): FormControl {
    return this.addStaffForm.get('company') as FormControl;
  }
  get experience(): FormControl {
    return this.addStaffForm.get('experience') as FormControl;
  }
  get salary(): FormControl {
    return this.addStaffForm.get('salary') as FormControl;
  }
  submitaddStaffForm() {
    if (this.addStaffForm.valid) {
      this.http.post<any>('http://localhost:8080/api/employees', this.addStaffForm.value)
        .subscribe(
          response => {
            console.log('Employee added successfully:', response);
            // Reset the form after successful addition
            this.addStaffForm.reset();
          },
          error => {
            console.error('Error adding employee:', error);
            // Handle error
          }
        );
    } else {
      // Form is invalid, mark all fields as touched to display validation messages
      Object.values(this.addStaffForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
