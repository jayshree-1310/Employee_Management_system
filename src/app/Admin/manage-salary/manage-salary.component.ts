import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '../../core/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-salary',
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
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './manage-salary.component.html',
  styleUrl: './manage-salary.component.css',
})
export class ManageSalaryComponent implements OnInit {
  salaryService: AuthService = inject(AuthService);
  toast: ToastrService = inject(ToastrService);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  sdata: any;
  tempSalaryData: any;
  dataSource: any;
  salaryData: any;
  displayColumns: string[] = [
    'no',
    'Name',
    'department',
    'Basic',
    'allowance',
    'total',
    'action',
  ];
  ngOnInit(): void {
    this.loadData();
  }

  pageNumber = 0;

  prevPage() {
    this.pageNumber--;
    this.loadData();
  }
  nextPage() {
    this.pageNumber++;
    this.loadData();
  }

  loadData() {
    this.salaryService
      .getAllEmployeePage(this.pageNumber)
      .subscribe((res: any) => {
        this.tempSalaryData = res;
        this.sdata = res.content.map((item: any) => ({
          ...item,
          basic: 0,
          allowance: 0,
          total: item.salary,
        }));
        this.dataSource = new MatTableDataSource(this.sdata);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });
  }
  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  calculateTotal(row: any): void {
    row.total = row.basic + row.allowance;
  }
  addSalary(element: any) {
    const formData = new FormData();
    formData.append('salary', element.total);
    this.salaryService.addSalary(element.email, formData).subscribe((res) => {
      this.toast.success('Salary Added Successfully ', 'Success', {
        timeOut: 3000,
        closeButton: true,
      });
    });
  }
}
