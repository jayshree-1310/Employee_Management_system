import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../core/leave.service';
interface LeaveRequest {
  id: number;
  profileimage:string;
  employeeName: string;
  department:string;
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
    this.leaveRequests = [
      { id: 1, profileimage:'abc',employeeName: 'John Doe',department:'def', leaveType: 'Sick Leave', startDate: new Date('2024-03-19'), endDate: new Date('2024-03-20'), status: 'Pending' },
      
      // Add more test data as needed
    ];
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
