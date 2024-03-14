import { Component, DoCheck, OnInit, inject } from '@angular/core';
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
export class SidebarComponent implements DoCheck {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  isAdmin!: boolean;
  isEmployee!: boolean;
  badgevisible = false;
  ngDoCheck(): void {
    this.authService.isAdmin.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.authService.isEmployee.subscribe((isEmployee) => {
      this.isEmployee = isEmployee;
    });
    if (this.router.url === '/login') {
      this.isAdmin = false;
      this.isEmployee = false;
    }
  }
  logout() {
    if (this.isAdmin) {
      this.authService.logoutAdmin();
      this.router.navigate(['login']);
    } else if (this.isEmployee) {
      this.authService.logoutEmployee();
      this.router.navigate(['login']);
    }
  }
  badgevisibility() {
    this.badgevisible = true;
  }
}
