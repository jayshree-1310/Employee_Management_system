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
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
    RouterOutlet
  ],
  templateUrl: './manage-staff.component.html',
  styleUrl: './manage-staff.component.css',
})
export class ManageStaffComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
  route: Router = inject(Router);
  ngOnInit(): void {
    const userdata = [
      {
        fname: 'Smita',
        lname: 'Kumari',
        email: 'smita@example.com',
        birthdate: '1991-01-01',
        gender: 'female',
        department: 'HR',
        contact: '9999999999',
        salary: 120000,
      },
      {
        fname: 'Akshay',
        lname: 'Kumar',
        email: 'Akshay@example.com',
        birthdate: '1992-01-01',
        gender: 'Male',
        department: 'IT',
        contact: '9090909090',
        salary: 125000,
      },
      {
        fname: 'Vikram',
        lname: 'Singh',
        email: 'vikram@example.com',
        birthdate: '1993-01-01',
        gender: 'Male',
        department: 'Cloud',
        contact: '9898989898',
        salary: 225000,
      },
      {
        fname: 'Puja',
        lname: 'Kumari',
        email: 'puja@example.com',
        birthdate: '1994-01-01',
        gender: 'Female',
        department: 'Testing',
        contact: '9292929292',
        salary: 100000,
      },
      {
        fname: 'Ranjan',
        lname: 'Kedia',
        email: 'ranjan@example.com',
        birthdate: '1995-01-01',
        gender: 'Male',
        department: 'IT',
        contact: '9191919191',
        salary: 150000,
      },
      {
        fname: 'Vivek',
        lname: 'Agnihotri',
        email: 'vivek@example.com',
        birthdate: '1996-01-01',
        gender: 'Male',
        department: 'IT',
        contact: '9393939393',
        salary: 175000,
      },
      {
        fname: 'Vivek',
        lname: 'singh',
        email: 'Vivek@example.com',
        birthdate: '1997-01-01',
        gender: 'Male',
        department: 'Cloud',
        contact: '+1234567897',
        salary: 165000,
      },
      {
        fname: 'Akhil',
        lname: 'Mishra',
        email: 'akhil@example.com',
        birthdate: '1998-01-01',
        gender: 'Male',
        department: 'Testing',
        contact: '+1234567898',
        salary: 135000,
      },
      {
        fname: 'Siddharth',
        lname: 'Malhotra',
        email: 'sid@example.com',
        birthdate: '1999-01-01',
        gender: 'Male',
        department: 'HR',
        contact: '+1234567899',
        salary: 250000,
      },
      {
        fname: 'Zeenat',
        lname: 'Khan',
        email: 'zeenat@example.com',
        birthdate: '2000-01-01',
        gender: 'Female',
        department: 'IT',
        contact: '+12345678910',
        salary: 129500,
      },
      {
        fname: 'Lucky',
        lname: 'Singh',
        email: 'lucky@example.com',
        birthdate: '2001-01-01',
        gender: 'Male',
        department: 'Cloud',
        contact: '+12345678911',
        salary: 115000,
      },
      {
        fname: 'Khushi',
        lname: 'Kumari',
        email: 'khushi@example.com',
        birthdate: '2002-01-01',
        gender: 'Female',
        department: 'HR',
        contact: '+12345678912',
        salary: 190000,
      },
    ];
    this.dataSource = new MatTableDataSource(userdata);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  ngOnDestroy(): void {}
}
