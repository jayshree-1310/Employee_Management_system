import { Component, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule, DatePipe } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LeaveService } from '../../core/leave.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-history',
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
    MatChipsModule,
    DatePipe,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './leave-history.component.html',
  styleUrl: './leave-history.component.css',
})
export class LeaveHistoryComponent {
  sanitizer: DomSanitizer = inject(DomSanitizer);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  leaveData!: any;
  leaveService: LeaveService = inject(LeaveService);
  searchdata = '';
  dataSource: any;
  pageNumber = 0;
  displayColumns: string[] = [
    'no',
    'photo',
    'name',
    'email',
    'department',
    'reason',
    'description',
    'leaveFromDate',
    'leaveToDate',
    'status',
  ];
  ngOnInit(): void {
    this.loadData();
  }

  nextPage() {
    this.pageNumber++;
    this.loadData();
  }
  prevPage() {
    this.pageNumber--;
    this.loadData();
  }

  loadData() {
    if (this.searchdata != '') {
      this.leaveService
        .getAllSearchedLeave(this.searchdata, this.pageNumber)
        .subscribe((res) => {
          this.leaveData = res;
          this.dataSource = new MatTableDataSource(this.leaveData.content);
        });
    } else {
      this.leaveService.getAllLeavePage(this.pageNumber).subscribe((res) => {
        this.leaveData = res;
        this.dataSource = new MatTableDataSource(this.leaveData.content);
      });
    }
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

  filterChange() {
    this.loadData();
  }
}
