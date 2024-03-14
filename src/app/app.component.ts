import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { LoginformComponent } from './common/loginform/loginform.component';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
import { EmployeeComponent } from './common/employee/employee.component';
import { AdminComponent } from './common/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            MatButtonModule,
            SidebarComponent,
            LoginformComponent,
           RegistrationformComponent,
           EmployeeComponent,
           AdminComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EMS';
}
