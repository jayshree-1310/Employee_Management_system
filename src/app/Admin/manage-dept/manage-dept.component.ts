import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
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
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentPopupComponent } from '../add-department-popup/add-department-popup.component';
import { EditDepartmentPopupComponent } from '../edit-department-popup/edit-department-popup.component';
import { DepartmentService } from '../../core/department.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-dept',
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
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './manage-dept.component.html',
  styleUrl: './manage-dept.component.css',
})
export class ManageDeptComponent implements OnInit {
  nextPage() {
    this.pageNumber++;
    this.loadData();
  }
  prevPage() {
    this.pageNumber--;
    this.loadData();
  }
  
  departmentService: DepartmentService = inject(DepartmentService);
  toast: ToastrService = inject(ToastrService);
  constructor(private dialog: MatDialog) {}
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
  route: Router = inject(Router);
  departmentData: any;
  ngOnInit(): void {
    this.loadData();
  }

  pageNumber=0;

  loadData() {
    this.departmentService.getAllDepartmentPage(this.pageNumber).subscribe((res) => {
      this.departmentData = res;
      this.dataSource = new MatTableDataSource(this.departmentData.content);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });
  }
  displayColumns: string[] = ['no', 'name', 'action'];

  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  addEmployee() {
    this.dialog.open(AddDepartmentPopupComponent, {
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms',
    });
  }
  editDepartment(element: any) {
    const _editUserPopup = this.dialog.open(EditDepartmentPopupComponent, {
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms',
      data: {
        data: element,
      },
    });
    _editUserPopup.afterClosed().subscribe((r) => {
      this.loadData();
    });
  }
  deleteDepartment(id: any) {
    this.departmentService.deleteDepartment(id).subscribe((res) => {
      this.toast.success('Department Deleted Successfully', 'Success', {
        timeOut: 3000,
        closeButton: true,
      });
    });
  }
}
