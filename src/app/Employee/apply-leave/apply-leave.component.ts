import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeaveService } from '../../core/leave.service';



  onSubmit() {
    if (this.leaveForm.invalid) {
      return;
    }

    // Extract leave request data from the form
    const leaveRequestData = this.leaveForm.value;

    // Call the service to submit the leave request
    this.leaveService.applyLeaveRequest(leaveRequestData).subscribe(
      () => {
        // Handle success 
        console.log('Leave request submitted successfully');
        this.leaveForm.reset();
      },
      (error: any) => {
        // Handle error 
        console.error('Error submitting leave request: ', error);
      }
    );
  }

}
