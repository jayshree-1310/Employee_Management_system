import { Routes } from '@angular/router';
import { RegistrationformComponent } from './common/registrationform/registrationform.component';
import { LoginformComponent } from './common/loginform/loginform.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './Employee/employee-dashboard/employee-dashboard.component';
import { ManageStaffComponent } from './Admin/manage-staff/manage-staff.component';
import { AddStaffComponent } from './Admin/add-staff/add-staff.component';
import { ManageDeptComponent } from './Admin/manage-dept/manage-dept.component';
import { ManageLeavesComponent } from './Admin/manage-leaves/manage-leaves.component';
import { EmpProfileComponent } from './Employee/emp-profile/emp-profile.component';
import { ManageSalaryComponent } from './Admin/manage-salary/manage-salary.component';
import { AddSalaryComponent } from './Admin/add-salary/add-salary.component';
import { HolidayListComponent } from './Employee/holiday-list/holiday-list.component';
import { ApplyLeaveComponent } from './Employee/apply-leave/apply-leave.component';
import { UpdateProfileComponent } from './common/update-profile/update-profile.component';
import { ManageAttendanceComponent } from './Admin/manage-attendance/manage-attendance.component';
import { AuthGuard } from './auth.guard';

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
    canActivate: [AuthGuard]
  },
  {
    path: 'employeeDashboard',
    component: EmployeeDashboardComponent,
    title: 'employeeDashboard',
    canActivate: [AuthGuard]

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
    path: 'manage-dept',
    component: ManageDeptComponent,
    title: 'manage-dept',
  },
  {
    path: 'manage-leaves',
    component: ManageLeavesComponent,
    title: 'manage-leaves',
  },
  {
    path: 'manage-salary',
    component: ManageSalaryComponent,
    title: 'manage-salary',
  },
  {
    path: 'add-salary',
    component: AddSalaryComponent,
    title: 'add-salary',
  },
  {
    path: 'holiday-list',
    component: HolidayListComponent,
    title: 'holiday-list',
  },
  {
    path: 'emp-profile',
    component: EmpProfileComponent,
    title: 'emp-profile',
  },
  {
    path: 'apply-leave',
    component: ApplyLeaveComponent,
    title: 'apply-leave',
  },
  {
    path: 'update-profile',
    component: UpdateProfileComponent,
    title: 'update-profile',
  },
  {
    path: 'manage-attendance',
    component: ManageAttendanceComponent,
    title: 'manage-attendance',
  },
];
