import { Component, DoCheck, OnDestroy, OnInit, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    CommonModule,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements DoCheck, OnDestroy {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  isAdmin!: boolean;
  isEmployee!: boolean;
  badgevisible = false;
  ngDoCheck(): void {
    this.authService.isAdminSubject.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.authService.isEmployeeSubject.subscribe((isEmployee) => {
      this.isEmployee = isEmployee;
    });
    if (this.router.url === '/login') {
      this.isAdmin = false;
      this.isEmployee = false;
    }
  }
  logout() {
    if (this.isAdmin) {
      this.authService.logOutAdmin();
      this.router.navigate(['login']);
    } else if (this.isEmployee) {
      this.authService.logOutEmployee();
      this.router.navigate(['login']);
    }
  }
  ngOnDestroy(): void {
    this.authService.isAdminSubject.unsubscribe();
    this.authService.isEmployeeSubject.unsubscribe();
  }
  badgevisibility() {
    this.badgevisible = true;
  }
}
