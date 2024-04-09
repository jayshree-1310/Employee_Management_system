import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LeaveService } from '../../core/leave.service';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css',
})
export class ApplyLeaveComponent implements OnInit {
  leaveForm: FormGroup;
  userMail: any;
  leaveService: LeaveService = inject(LeaveService);
  ngOnInit(): void {
    this.userMail = localStorage.getItem('email');
    console.log(this.userMail);
  }
  constructor(private formBuilder: FormBuilder) {
    this.leaveForm = this.formBuilder.group({
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }
  get reason(): FormControl {
    return this.leaveForm.get('reason') as FormControl;
  }
  get leaveFromDate(): FormControl {
    return this.leaveForm.get('startDate') as FormControl;
  }
  get leaveToDate(): FormControl {
    return this.leaveForm.get('endDate') as FormControl;
  }
  get description(): FormControl {
    return this.leaveForm.get('leaveType') as FormControl;
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('reason', this.reason.value);
    formData.append('leaveFromDate', this.leaveFromDate.value);
    formData.append('leaveToDate', this.leaveToDate.value);
    formData.append('description', this.description.value);
    formData.append('register_id', this.userMail);
    this.leaveService.submitLeaveRequest(formData).subscribe((res) => {
      this.leaveForm.reset();
    });
  }
}
