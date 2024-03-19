import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-department-popup',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, MatButtonModule, MatDialogModule],
  templateUrl: './add-department-popup.component.html',
  styleUrl: './add-department-popup.component.css',
})
export class AddDepartmentPopupComponent {
  constructor(private ref: MatDialogRef<AddDepartmentPopupComponent>) {}
  addDepartmentForm = new FormGroup({
    departmentName: new FormControl('', [Validators.required]),
  });
  get departmentName(): FormControl {
    return this.addDepartmentForm.get('departmentName') as FormControl;
  }
  submitAddDepartmentForm() {
    this.addDepartmentForm.reset();
    this.ref.close();
  }
}
