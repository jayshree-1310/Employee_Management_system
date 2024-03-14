import { Routes } from '@angular/router';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
import { LoginformComponent } from './Common/loginform/loginform.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegistrationformComponent,
    title: 'Registration',
  },
  { path: 'login', component: LoginformComponent, title: 'Login' },
];
