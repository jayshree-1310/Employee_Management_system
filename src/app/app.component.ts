import { Component } from '@angular/core';
import {Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, SidebarComponent ,RouterLink,CommonModule,RegistrationformComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EMS';
  
}

