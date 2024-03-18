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
  ],
  templateUrl: './manage-staff.component.html',
  styleUrl: './manage-staff.component.css',
})
export class ManageStaffComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
  route: Router = inject(Router);
  ngOnInit(): void {
    const userdata = [
      {
        fname: 'FirstName_1',
        lname: 'LastName_1',
        email: 'email_1@example.com',
        birthdate: '1991-01-01',
        gender: 'Male',
        department: 'Department_1',
        contact: '+1234567891',
        salary: 120000,
      },
      {
        fname: 'FirstName_2',
        lname: 'LastName_2',
        email: 'email_2@example.com',
        birthdate: '1992-01-01',
        gender: 'Female',
        department: 'Department_2',
        contact: '+1234567892',
        salary: 125000,
      },
      {
        fname: 'FirstName_3',
        lname: 'LastName_3',
        email: 'email_3@example.com',
        birthdate: '1993-01-01',
        gender: 'Male',
        department: 'Department_3',
        contact: '+1234567893',
        salary: 225000,
      },
      {
        fname: 'FirstName_4',
        lname: 'LastName_4',
        email: 'email_4@example.com',
        birthdate: '1994-01-01',
        gender: 'Female',
        department: 'Department_4',
        contact: '+1234567894',
        salary: 100000,
      },
      {
        fname: 'FirstName_5',
        lname: 'LastName_5',
        email: 'email_5@example.com',
        birthdate: '1995-01-01',
        gender: 'Male',
        department: 'Department_5',
        contact: '+1234567895',
        salary: 150000,
      },
      {
        fname: 'FirstName_6',
        lname: 'LastName_6',
        email: 'email_6@example.com',
        birthdate: '1996-01-01',
        gender: 'Female',
        department: 'Department_6',
        contact: '+1234567896',
        salary: 175000,
      },
      {
        fname: 'FirstName_7',
        lname: 'LastName_7',
        email: 'email_7@example.com',
        birthdate: '1997-01-01',
        gender: 'Male',
        department: 'Department_7',
        contact: '+1234567897',
        salary: 165000,
      },
      {
        fname: 'FirstName_8',
        lname: 'LastName_8',
        email: 'email_8@example.com',
        birthdate: '1998-01-01',
        gender: 'Female',
        department: 'Department_8',
        contact: '+1234567898',
        salary: 135000,
      },
      {
        fname: 'FirstName_9',
        lname: 'LastName_9',
        email: 'email_9@example.com',
        birthdate: '1999-01-01',
        gender: 'Male',
        department: 'Department_9',
        contact: '+1234567899',
        salary: 210000,
      },
      {
        fname: 'FirstName_10',
        lname: 'LastName_10',
        email: 'email_10@example.com',
        birthdate: '2000-01-01',
        gender: 'Female',
        department: 'Department_10',
        contact: '+12345678910',
        salary: 129500,
      },
      {
        fname: 'FirstName_11',
        lname: 'LastName_11',
        email: 'email_11@example.com',
        birthdate: '2001-01-01',
        gender: 'Male',
        department: 'Department_11',
        contact: '+12345678911',
        salary: 115000,
      },
      {
        fname: 'FirstName_12',
        lname: 'LastName_12',
        email: 'email_12@example.com',
        birthdate: '2002-01-01',
        gender: 'Female',
        department: 'Department_12',
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
}
