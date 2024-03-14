import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationformComponent } from '../registrationform/registrationform.component';

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
    RegistrationformComponent,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isAdmin: boolean = false;
  isEmployee: boolean = false;

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
