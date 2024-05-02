import { NgClass } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DepartmentService } from '../../core/department.service';
import { AuthService } from '../../core/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user-popup',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './edit-user-popup.component.html',
  styleUrl: './edit-user-popup.component.css',
})
export class EditUserPopupComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  deptService: DepartmentService = inject(DepartmentService);
  toast: ToastrService = inject(ToastrService);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<EditUserPopupComponent>
  ) {}
  deptArray: any;
  userdata: any;
  ngOnInit(): void {
    this.deptService.getAllDepartment().subscribe((res) => {
      this.deptArray = res;
    });
    this.userdata = this.data;
    this.editUserForm.setValue({
      fname: this.userdata.data.firstName,
      lname: this.userdata.data.lastName,
      email: this.userdata.data.email,
      phone: this.userdata.data.contact,
      department: this.userdata.data.department,
      dateOfBirth: this.userdata.data.birthdate,
      salary: this.userdata.data.salary,
    });
  }
  editUserForm = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){3,30}"),
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){3,30}"),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$'
      ),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('^[6-9][0-9]{9}$'),
    ]),
    department: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    salary: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{5,}$'),
    ]),
  });
  get fname(): FormControl {
    return this.editUserForm.get('fname') as FormControl;
  }
  get lname(): FormControl {
    return this.editUserForm.get('lname') as FormControl;
  }
  get id(): FormControl {
    return this.editUserForm.get('email') as FormControl;
  }
  get phone(): FormControl {
    return this.editUserForm.get('phone') as FormControl;
  }
  get department(): FormControl {
    return this.editUserForm.get('department') as FormControl;
  }
  get date(): FormControl {
    return this.editUserForm.get('dateOfBirth') as FormControl;
  }

  get salary(): FormControl {
    return this.editUserForm.get('salary') as FormControl;
  }
  closePopup() {
    this.ref.close();
  }
  editUser() {
    const formData = new FormData();
    formData.append('fname', this.fname.value);
    formData.append('lname', this.lname.value);
    formData.append('email', this.id.value);
    formData.append('phone', this.phone.value);
    formData.append('department', this.department.value);
    formData.append('dateOfBirth', this.date.value);
    formData.append('salary', this.salary.value);
    this.authService
      .updateEmployee(this.userdata.data.id, formData)
      .subscribe((res) => {
        this.closePopup();
        this.toast.success('Edited Successfully', 'Success', {
          timeOut: 3000,
          closeButton: true,
        });
      });
  }
}
