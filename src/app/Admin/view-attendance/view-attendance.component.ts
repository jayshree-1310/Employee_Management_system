import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AttendanceService } from '../../core/attendance.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-view-attendance',
  standalone: true,
  imports: [
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
    FormsModule,
    MatChipsModule,
    MatDialogModule,
  ],
  templateUrl: './view-attendance.component.html',
  styleUrl: './view-attendance.component.css',
})
export class ViewAttendanceComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  sanitizer: DomSanitizer = inject(DomSanitizer);
  attendanceService: AttendanceService = inject(AttendanceService);
  dialog: MatDialog = inject(MatDialog);
  attendanceList!: any;
  dataSource: any;
  presentDate: any;
  displayColumns: string[] = [
    'image',
    'name',
    'email',
    'phone',
    'department',
    'status',
  ];
  ngOnInit(): void {
    this.presentDate = this.getPreviousDate();
    this.loadData(this.presentDate);
  }

  prevPage() {
    this.pageNumber--;
    this.loadData(this.presentDate);
    }
    nextPage() {
      this.pageNumber++;
      this.loadData(this.presentDate);
    }
    
  pageNumber=0;

  loadData(date: any) {
    this.attendanceService.getAttendancesByDatePage(date,this.pageNumber).subscribe((res) => {
      this.attendanceList = res;
      this.dataSource = new MatTableDataSource(this.attendanceList.content);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });
  }
  getPreviousDate() {
    const today = new Date();
    let dayToSubtract = 1;
    if (today.getDay() === 0) {
      dayToSubtract = 2;
    } else if (today.getDay() === 1) {
      dayToSubtract = 3;
    }
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - dayToSubtract);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formatteddate = previousDate.toLocaleDateString('sv');
    return formatteddate;
  }
  changeDate() {
    this.loadData(this.presentDate);
  }
  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  getImageUrl(element: any): SafeUrl {
    if (element) {
      const typeMatch = element.employee.image.match(
        /^data:(image\/[a-z]+);base64,/i
      );

      if (typeMatch && typeMatch.length > 1) {
        const imageType = typeMatch[1];
        return this.sanitizer.bypassSecurityTrustUrl(
          'data:' + imageType + ';base64,' + element.employee.image
        );
      } else {
        return this.sanitizer.bypassSecurityTrustUrl(
          'data:image/png;base64,' + element.employee.image
        );
      }
    }
    return '';
  }
}
