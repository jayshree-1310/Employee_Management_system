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
}
