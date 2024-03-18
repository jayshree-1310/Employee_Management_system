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
  selector: 'app-manage-salary',
  standalone: true,
  imports: [MatTableModule,
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
  templateUrl: './manage-salary.component.html',
  styleUrl: './manage-salary.component.css'
})
export class ManageSalaryComponent {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
  route: Router = inject(Router);
  ngOnInit(): void {
    const userdata = [
      {
        name: "First Employee",
        salary:"60000"
      },
      {
        name: "Second Employee",
        salary:"140000"
      },
      {
        name: "Third Employee",
        salary:"1500000"
      },
      {
        name:"Fourth Employee",
        salary:"2000000"
      },
      {
        name:"Fifth Employee",
        salary:"2000000"
      },
      {
        name:"Sixth Employee",
        salary:"200000"
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
    'number',
    'action',
  ];

  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  addSalary() {
    this.route.navigate(['/add-salary']);
  }
}
