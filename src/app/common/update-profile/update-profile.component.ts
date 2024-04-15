import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DepartmentService } from '../../core/department.service';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [NgClass, TitleCasePipe, ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css',
})
export class UpdateProfileComponent implements OnInit {
  deptService: DepartmentService = inject(DepartmentService);
  roleOptions: any;
  ngOnInit(): void {
    this.deptService.getAllDepartment().subscribe((res) => {
      this.roleOptions = res;
    });
  }
  updateProfileForm = new FormGroup({
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
    return this.updateProfileForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.updateProfileForm.get('password') as FormControl;
  }
  get firstName(): FormControl {
    return this.updateProfileForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.updateProfileForm.get('lastName') as FormControl;
  }
  get gender(): FormControl {
    return this.updateProfileForm.get('gender') as FormControl;
  }
  get dob(): FormControl {
    return this.updateProfileForm.get('dateOfBirth') as FormControl;
  }
  get department(): FormControl {
    return this.updateProfileForm.get('department') as FormControl;
  }
  get image(): FormControl {
    return this.updateProfileForm.get('image') as FormControl;
  }
  get contact(): FormControl {
    return this.updateProfileForm.get('contact') as FormControl;
  }
  get company(): FormControl {
    return this.updateProfileForm.get('company') as FormControl;
  }
  get experience(): FormControl {
    return this.updateProfileForm.get('experience') as FormControl;
  }
  get salary(): FormControl {
    return this.updateProfileForm.get('salary') as FormControl;
  }
  submitupdateProfileForm() {}
}
