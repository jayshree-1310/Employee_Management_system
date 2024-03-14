import { Routes } from '@angular/router';
import { LoginformComponent } from './common/loginform/loginform.component';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';

export const routes: Routes = [
    { path: 'login', component:LoginformComponent},
    { path: 'register', component:RegistrationformComponent},
];
