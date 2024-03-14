import { Routes } from '@angular/router';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
import { LoginformComponent } from './common/loginform/loginform.component';
import { AdminComponent } from './common/admin/admin.component';
import { EmployeeComponent } from './common/employee/employee.component';

export const routes: Routes = [
  { path: '', component: LoginformComponent, pathMatch: 'full' },
  {
    path: 'register',
    component: RegistrationformComponent,
    title: 'Register',
  },
  { path: 'login', component: LoginformComponent, title: 'Login' },
  {path:'admin',component:AdminComponent},
  {path:'employee',component:EmployeeComponent}
];
