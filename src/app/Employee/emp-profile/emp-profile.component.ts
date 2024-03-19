import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-emp-profile',
  standalone: true,
  imports: 
  [
    MatIconModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
  ],
  templateUrl: './emp-profile.component.html',
  styleUrl: './emp-profile.component.css'
})
export class EmpProfileComponent {

}
