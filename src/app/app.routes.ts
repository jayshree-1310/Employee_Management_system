import { Routes } from '@angular/router';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
import { LoginformComponent } from './common/loginform/loginform.component';

export const routes: Routes = [
  { path: '', component: LoginformComponent, pathMatch: 'full' },
  {
    path: 'register',
    component: RegistrationformComponent,
    title: 'Register',
  },
  { path: 'login', component: LoginformComponent, title: 'Login' },
];
