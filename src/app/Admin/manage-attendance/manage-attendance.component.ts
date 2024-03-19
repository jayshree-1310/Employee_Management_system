import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LeaveService } from '../../core/leave.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-manage-attendance',
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
  ],
  templateUrl: './manage-attendance.component.html',
  styleUrl: './manage-attendance.component.css',
})
export class ManageAttendanceComponent implements OnInit {
  leaveRequests: any;
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
  displayColumns: string[] = ['no', 'image', 'name', 'department', 'action'];

  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
