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
<<<<<<< HEAD
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from '../../core/auth.service';
=======
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../core/employee-service.service';
>>>>>>> e42140a39a3783b3968bd4c75521fd8ac8b971f4

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
<<<<<<< HEAD
=======
    HttpClientModule,
    
    
>>>>>>> e42140a39a3783b3968bd4c75521fd8ac8b971f4
  ],
  templateUrl: './manage-staff.component.html',
  styleUrl: './manage-staff.component.css',
})
<<<<<<< HEAD
export class ManageStaffComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
  userdata: any;
=======
export class ManageStaffComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<any>;; 
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
>>>>>>> e42140a39a3783b3968bd4c75521fd8ac8b971f4
  route: Router = inject(Router);
  constructor(private employeeService: EmployeeService,private http:HttpClient) {}
  
  ngOnInit(): void {
<<<<<<< HEAD
    this.loadData();
  }
  loadData() {
    this.authService.getAllEmployee().subscribe((res) => {
      this.userdata = res;
    });
    this.dataSource = new MatTableDataSource(this.userdata);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
=======
    this.employeeService.getAllEmployees().subscribe((data: any[]) => { 
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
>>>>>>> e42140a39a3783b3968bd4c75521fd8ac8b971f4
  }
  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
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
<<<<<<< HEAD
  deleteEmployee(id: any) {
    this.authService.deleteEmployee(id).subscribe((res) => {
      this.loadData();
    });
  }
=======

  ngOnDestroy(): void {}
  private apiUrl = 'http://localhost:8080/api/employees';



  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
>>>>>>> e42140a39a3783b3968bd4c75521fd8ac8b971f4
}
