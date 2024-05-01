import { CommonModule, DatePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { LeaveService } from '../../core/leave.service';
import * as alertify from 'alertifyjs';

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
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
  ],
  templateUrl: './manage-leaves.component.html',
  styleUrl: './manage-leaves.component.css',
})
export class ManageLeavesComponent implements OnInit {
  leaveService: LeaveService = inject(LeaveService);
  toast: ToastrService = inject(ToastrService);
  leaveRequests: any;
  sanitizer: DomSanitizer = inject(DomSanitizer);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
  searchdata: any = '';
  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  pageNumber = 0;

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
        .getSearchedLeave(this.searchdata, this.pageNumber)
        .subscribe((res) => {
          this.leaveRequests = res;
          this.dataSource = new MatTableDataSource(this.leaveRequests.content);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        });
    } else {
      this.leaveService
        .getPendingLeavesRequestsPage(this.pageNumber)
        .subscribe((res) => {
          this.leaveRequests = res;
          this.dataSource = new MatTableDataSource(this.leaveRequests.content);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        });
    }
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

  filterChange() {
    this.loadData();
    // const value = (data.target as HTMLInputElement).value;
    // this.dataSource.filter = value.trim().toLowerCase();
  }
  getImageUrl(element: any): SafeUrl {
    if (element) {
      // Extracting image type from base64 string
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
    return ''; // Or provide a placeholder image
  }
  approveLeave(element: any) {
    alertify
      .confirm(
        'Approve Leave',
        'Are you Sure to Approve the leave of ' +
          element.employee.firstName +
          ' ?',
        () => {
          this.leaveService.approveLeaveRequest(element.id).subscribe((res) => {
            this.toast.info(
              'Leave Approved For ' + element.employee.firstName,
              'Info',
              {
                timeOut: 3000,
                closeButton: true,
              }
            );
            this.loadData();
          });
        },
        function () {}
      )
      .set('labels', { ok: 'Yes', cancel: 'No' })
      .set({ transition: 'flipx' })
      .set('movable', false);
  }
  rejectLeave(element: any) {
    alertify
      .confirm(
        'Reject Leave',
        'Are you Sure to Reject the leave of ' +
          element.employee.firstName +
          ' ?',
        () => {
          this.leaveService.rejectLeaveRequest(element.id).subscribe((res) => {
            this.toast.info(
              'Leave Rejected For ' + element.employee.firstName,
              'Info',
              {
                timeOut: 3000,
                closeButton: true,
              }
            );
            this.loadData();
          });
        },
        function () {}
      )
      .set('labels', { ok: 'Yes', cancel: 'No' })
      .set({ transition: 'flipx' })
      .set('movable', false);
  }
}
