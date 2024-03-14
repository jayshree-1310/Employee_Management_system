import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { LoginformComponent } from './common/loginform/loginform.component';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            MatButtonModule,
            SidebarComponent,
            LoginformComponent,
           RegistrationformComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EMS';
}
