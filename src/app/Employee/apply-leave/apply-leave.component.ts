import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeaveService } from '../../core/leave.service';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css'
})
export class ApplyLeaveComponent {
  leaveForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private leaveService: LeaveService) {
    this.leaveForm = this.formBuilder.group({
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.leaveForm.invalid) {
      return;
    }

    // Extract leave request data from the form
    const leaveRequestData = this.leaveForm.value;

    // Call the service to submit the leave request
    this.leaveService.applyLeaveRequest(leaveRequestData).subscribe(
      () => {
        // Handle success (e.g., display success message)
        console.log('Leave request submitted successfully');
        this.leaveForm.reset();
      },
      (error: any) => {
        // Handle error (e.g., display error message)
        console.error('Error submitting leave request: ', error);
      }
    );
  }

}
