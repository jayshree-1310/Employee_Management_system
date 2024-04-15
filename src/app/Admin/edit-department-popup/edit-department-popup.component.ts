import { NgClass } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DepartmentService } from '../../core/department.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-department-popup',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, MatButtonModule, MatDialogModule],
  templateUrl: './edit-department-popup.component.html',
  styleUrl: './edit-department-popup.component.css',
})
export class EditDepartmentPopupComponent implements OnInit {
  departmentService: DepartmentService = inject(DepartmentService);
  toast: ToastrService = inject(ToastrService);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<EditDepartmentPopupComponent>
  ) {}
  deptData: any;
  ngOnInit(): void {
    this.deptData = this.data;
    this.editDepartmentForm.setValue({
      departmentName: this.deptData.data.departmentName,
    });
  }
  editDepartmentForm = new FormGroup({
    departmentName: new FormControl('', [Validators.required]),
  });
  get departmentName(): FormControl {
    return this.editDepartmentForm.get('departmentName') as FormControl;
  }
  submitEditDepartmentForm() {
    this.departmentService
      .editDepartment(
        String(this.deptData.data.dept_id),
        this.editDepartmentForm.value
      )
      .subscribe((res) => {
        this.toast.success('Edited Successfully', 'Success', {
          timeOut: 3000,
          closeButton: true,
        });
      });
    this.editDepartmentForm.reset();
    this.ref.close();
  }
}
