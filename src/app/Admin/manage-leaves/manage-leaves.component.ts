import { CommonModule, DatePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { LeaveService } from '../../core/leave.service';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
interface LeaveRequest {
  id: number;
  image: string;
  name: string;
  department: string;
  reason: string;
  from: Date;
  to: Date;
  status: string;
}

@Component({
  selector: 'app-manage-leaves',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    DatePipe,
  ],
  templateUrl: './manage-leaves.component.html',
  styleUrl: './manage-leaves.component.css',
})
export class ManageLeavesComponent implements OnInit, AfterViewInit {
  leaveRequests: LeaveRequest[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    // this.loadLeaveRequests();
    this.leaveRequests = [
      {
        id: 1,
        image: 'abc',
        name: 'Smita Kumari',
        department: 'def',
        reason: 'Sick Leave',
        from: new Date('2024-03-19'),
        to: new Date('2024-03-20'),
        status: 'Pending',
      },

      // Add more test data as needed
    ];
    this.dataSource = new MatTableDataSource(this.leaveRequests);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  displayColumns: string[] = [
    'no',
    'image',
    'name',
    'department',
    'reason',
    'from',
    'to',
    'status',
    'action',
  ];

  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  // loadLeaveRequests() {
  //   this.leaveService.getLeaveRequests().subscribe(
  //     (data: LeaveRequest[]) => {
  //       this.leaveRequests = data;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching leave requests: ', error);
  //     }
  //   );
  // }

  // approveLeaveRequest(leaveRequestId: number) {
  //   this.leaveService.approveLeaveRequest(leaveRequestId).subscribe(
  //     () => {
  //       console.log('Leave request approved successfully');
  //       this.loadLeaveRequests();
  //     },
  //     (error: any) => {
  //       console.error('Error approving leave request: ', error);
  //     }
  //   );
  // }

  // rejectLeaveRequest(leaveRequestId: number) {
  //   this.leaveService.rejectLeaveRequest(leaveRequestId).subscribe(
  //     () => {
  //       console.log('Leave request rejected successfully');
  //       this.loadLeaveRequests();
  //     },
  //     (error: any) => {
  //       console.error('Error rejecting leave request: ', error);
  //     }
  //   );
  // }
}
