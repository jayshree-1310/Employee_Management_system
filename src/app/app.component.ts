import { Component } from '@angular/core';
import {Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { LoginformComponent } from './common/loginform/loginform.component';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
=======
import { CommonModule } from '@angular/common';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

>>>>>>> 06c9de770bbd574861c0d0885ac940a7fc311e34

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,
            MatButtonModule,
            SidebarComponent,
            LoginformComponent,
           RegistrationformComponent,
          ],
=======
  imports: [RouterOutlet, MatButtonModule, SidebarComponent ,RouterLink,CommonModule,RegistrationformComponent,RouterModule],
>>>>>>> 06c9de770bbd574861c0d0885ac940a7fc311e34
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EMS';
  
}

