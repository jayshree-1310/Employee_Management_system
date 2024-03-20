import { NgClass } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-edit-salary-popup',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, MatButtonModule, MatDialogModule],
  templateUrl: './edit-salary-popup.component.html',
  styleUrl: './edit-salary-popup.component.css'
})
export class EditSalaryPopupComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<EditSalaryPopupComponent>
  ) {}
  salaryData: any;
  ngOnInit(): void {
    this.salaryData = this.data;
    this.editSalaryForm.setValue({
      salaryName: this.salaryData.data.salary,
    });
  }
  editSalaryForm = new FormGroup({
    salaryName: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
  });
  get salaryName(): FormControl {
    return this.editSalaryForm.get('salaryName') as FormControl;
  }
  submitEditSalaryForm() {
    this.editSalaryForm.reset();
    this.ref.close();
  }
}
