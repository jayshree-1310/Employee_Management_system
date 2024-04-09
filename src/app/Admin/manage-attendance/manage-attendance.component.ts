import { Component, OnInit, ViewChild, inject } from '@angular/core';
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
import { SelectionModel } from '@angular/cdk/collections';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AttendanceService } from '../../core/attendance.service';
import { AuthService } from '../../core/auth.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    MatCheckboxModule,
  ],
  templateUrl: './manage-attendance.component.html',
  styleUrl: './manage-attendance.component.css',
})
export class ManageAttendanceComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  sanitizer: DomSanitizer = inject(DomSanitizer);
  attendanceService: AttendanceService = inject(AttendanceService);
  userList!: any;
  dataSource: any;
  selection!: SelectionModel<any>;
  tempIds: Set<number> = new Set<number>();
  employeeIds: any[] = [];
  presentDate: any;
  displayColumns: string[] = [
    'select',
    'image',
    'name',
    'email',
    'phone',
    'salary',
    'department',
  ];
  id: number = 0;

  constructor(private authService: AuthService) {
    const currentDate = new Date();
    this.presentDate = currentDate.toISOString().split('T')[0];
    this.selection = new SelectionModel<any>(true, []);
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.authService.getAllEmployee().subscribe((res) => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data?.length ?? 0;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }
  getSelectedRows() {
    const data = this.selection.selected;
    for (let i = 0; i < data.length; i++) {
      // this.tempIds.add(data[i].id);
      this.employeeIds.push(data[i].id);
    }
  }
  getImageUrl(element: any): SafeUrl {
    if (element) {
      // Extracting image type from base64 string
      const typeMatch = element.image.match(/^data:(image\/[a-z]+);base64,/i);

      if (typeMatch && typeMatch.length > 1) {
        const imageType = typeMatch[1];
        return this.sanitizer.bypassSecurityTrustUrl(
          'data:' + imageType + ';base64,' + element.image
        );
      } else {
        return this.sanitizer.bypassSecurityTrustUrl(
          'data:image/png;base64,' + element.image
        );
      }
    }
    return ''; // Or provide a placeholder image
  }
  markAttendance(present: boolean, halfDay: boolean) {
    // Array.from(this.tempIds)
    this.getSelectedRows();
    if (this.employeeIds.length > 0) {
      // console.log(this.selection.selected.length);
      // console.log(this.employeeIds);
      this.attendanceService
        .markAttendace(this.employeeIds, this.presentDate, present, halfDay)
        .subscribe((res) => {
          while (this.employeeIds.length != 0) {
            this.employeeIds.pop();
          }
        });
    }
  }
}
