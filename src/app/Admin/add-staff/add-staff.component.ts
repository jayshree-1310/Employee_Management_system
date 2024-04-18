import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../../core/department.service';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [NgClass, TitleCasePipe, ReactiveFormsModule],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css',
})
export class AddStaffComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  toast: ToastrService = inject(ToastrService);
  deptService: DepartmentService = inject(DepartmentService);
  roleOptions: any;
  ngOnInit(): void {
    this.deptService.getAllDepartment().subscribe((res) => {
      this.roleOptions = res;
    });
  }
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
      Validators.pattern('^[6-9][0-9]{9}$'),
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
  filetoUpload!: File;
  onChangeFileField(event: any) {
    this.filetoUpload = event.target.files[0];
  }
  submitaddStaffForm() {
    const formData = new FormData();
    formData.append('firstName', this.firstName.value);
    formData.append('lastName', this.lastName.value);
    formData.append('email', this.id.value);
    formData.append('contact', this.contact.value);
    formData.append('gender', this.gender.value);
    formData.append('department', this.department.value);
    formData.append('birthdate', this.dob.value);
    formData.append('image', this.filetoUpload);
    formData.append('company', this.company.value);
    formData.append('password', this.password.value);
    formData.append('experience', this.experience.value);
    formData.append('salary', this.salary.value);
    this.authService.addEmployee(formData).subscribe((res) => {
      this.toast.success('Added Successfully', 'Success', {
        timeOut: 3000,
        closeButton: true,
      });
      this.addStaffForm.reset();
    });
  }
}
