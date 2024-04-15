import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
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
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditUserPopupComponent } from '../../Common/edit-user-popup/edit-user-popup.component';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-manage-staff',
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
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatDialogModule,
  ],
  templateUrl: './manage-staff.component.html',
  styleUrl: './manage-staff.component.css',
})
export class ManageStaffComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  toast: ToastrService = inject(ToastrService);
  dialog: MatDialog = inject(MatDialog);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
  userdata: any;
  route: Router = inject(Router);
  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.authService.getAllEmployee().subscribe((res) => {
      this.userdata = res;
      this.dataSource = new MatTableDataSource(this.userdata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayColumns: string[] = [
    'no',
    'name',
    'email',
    'contact',
    'salary',
    'department',
    'birthdate',
    'action',
  ];

  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  addEmployee() {
    this.route.navigate(['/add-staff']);
  }
  deleteEmployee(id: any) {
    this.authService.deleteEmployee(id).subscribe((res) => {
      this.toast.success('Employee Deleted Successfully', 'Success', {
        timeOut: 3000,
        closeButton: true,
      });
      this.loadData();
    });
  }
  editUser(element: any) {
    const _editUserPopup = this.dialog.open(EditUserPopupComponent, {
      width: '50%',
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
  export(format: 'xlsx' | 'csv') {
    if (format === 'xlsx') {
      this.exportToExcel();
    } else if (format === 'csv') {
      this.exportToCsv();
    }
  }
  private exportToExcel() {
    const flattenedData = this.flattenData(this.userdata);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveFile(excelBuffer, 'table_data.xlsx');
  }
  private exportToCsv() {
    const flattenedData = this.flattenData(this.userdata);
    const csvData = this.convertToCSV(flattenedData);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'table_data.csv');
  }
  private convertToCSV(data: any[]): string {
    const csvRows: string[] = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
      const values = headers.map((header) => {
        return row[header];
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  }

  private flattenData(data: any[]): any[] {
    const flattenedData = [];
    for (const item of data) {
      const flatItem: any = { ...item };
      delete flatItem.image;
      delete flatItem.password;
      flattenedData.push(flatItem);
    }
    return flattenedData;
  }
  private saveFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(data, fileName);
  }
}
