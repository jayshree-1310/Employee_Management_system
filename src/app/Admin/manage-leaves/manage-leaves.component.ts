import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../core/leave.service';
interface LeaveRequest {
  id: number;
  employeeName: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

@Component({
  selector: 'app-manage-leaves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-leaves.component.html',
  styleUrl: './manage-leaves.component.css'
})
export class ManageLeavesComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];

  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests() {
    this.leaveService.getLeaveRequests().subscribe(
      (data: LeaveRequest[]) => {
        this.leaveRequests = data;
      },
      (error: any) => {
        console.error('Error fetching leave requests: ', error);
      }
    );
  }

  approveLeaveRequest(leaveRequestId: number) {
    this.leaveService.approveLeaveRequest(leaveRequestId).subscribe(
      () => {
        console.log('Leave request approved successfully');
        this.loadLeaveRequests();
      },
      (error: any) => {
        console.error('Error approving leave request: ', error);
      }
    );
  }

  rejectLeaveRequest(leaveRequestId: number) {
    this.leaveService.rejectLeaveRequest(leaveRequestId).subscribe(
      () => {
        console.log('Leave request rejected successfully');
        this.loadLeaveRequests();
      },
      (error: any) => {
        console.error('Error rejecting leave request: ', error);
      }
    );
  }
}