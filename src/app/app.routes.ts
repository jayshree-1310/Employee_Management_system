import { Routes } from '@angular/router';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
import { LoginformComponent } from './common/loginform/loginform.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './Employee/employee-dashboard/employee-dashboard.component';
import { ManageStaffComponent } from './Admin/manage-staff/manage-staff.component';
import { AddStaffComponent } from './Admin/add-staff/add-staff.component';
import { ManageDeptComponent } from './Admin/manage-dept/manage-dept.component';
import { AddDeptComponent } from './Admin/add-dept/add-dept.component';
import { ManageLeavesComponent } from './Admin/manage-leaves/manage-leaves.component';
import { AddSalaryComponent } from './Admin/add-salary/add-salary.component';
import { ManageSalaryComponent } from './Admin/manage-salary/manage-salary.component';

export const routes: Routes = [
  { path: '', component: LoginformComponent, pathMatch: 'full' },
  {
    path: 'register',
    component: RegistrationformComponent,
    title: 'Register',
  },
  { path: 'login', component: LoginformComponent, title: 'Login' },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    title: 'adminDashboard',
  },
  {
    path: 'employeeDashboard',
    component: EmployeeDashboardComponent,
    title: 'employeeDashboard',
  },
  {
    path: 'manage-staff',
    component: ManageStaffComponent,
    title: 'manage-staff',
  },
  {
    path: 'add-staff',
    component: AddStaffComponent,
    title: 'add-staff',
  },
  {
    path:'manage-dept',
    component:ManageDeptComponent,
    title:'manage-dept',
  },
  {
    path:'add-dept',
    component:AddDeptComponent,
    title:'add-dept',
  },
  {
    path:'manage-leaves',
    component:ManageLeavesComponent,
    title:'manage-leaves',
  },
  {
    path:'manage-salary',
    component:ManageSalaryComponent,
    title:'manage-salary',
  },
  {
    path:'add-salary',
    component:AddSalaryComponent,
    title:'add-salary',
  },
];
