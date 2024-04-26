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

import { HolidayListComponent } from './Employee/holiday-list/holiday-list.component';
import { ApplyLeaveComponent } from './Employee/apply-leave/apply-leave.component';

import { ManageAttendanceComponent } from './Admin/manage-attendance/manage-attendance.component';
import { LeaveHistoryComponent } from './Admin/leave-history/leave-history.component';
import { ViewAttendanceComponent } from './Admin/view-attendance/view-attendance.component';
import path from 'path';
import { SalaryslipComponent } from './Employee/salaryslip/salaryslip.component';
import { TodoComponent } from './Common/todo/todo.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { employeeGuard } from './core/guards/employee.guard';

export const routes: Routes = [
  { path: '', component: LoginformComponent, pathMatch: 'full' },
  {
    path: 'register',
    component: RegistrationformComponent,
    title: 'Register',
  },
  { path: 'login', component: LoginformComponent, title: 'Login' },

  {
    path: 'admin',
    title: 'Admin',
    canActivate: [authGuard, adminGuard],
    children: [
      {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
        title: 'adminDashboard',
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
        path: 'leave-history',
        component: LeaveHistoryComponent,
        title: 'Leave-History',
      },
      {
        path: 'manage-salary',
        component: ManageSalaryComponent,
        title: 'manage-salary',
      },
      {
        path: 'manage-attendance',
        component: ManageAttendanceComponent,
        title: 'manage-attendance',
      },
      {
        path: 'view-attendance',
        component: ViewAttendanceComponent,
        title: 'view-attendance',
      },
      {
        path: 'tasks',
        component: TodoComponent,
        title: 'Task',
      },
    ],
  },
  {
    path: 'employee',
    title: 'Employee',
    canActivate: [authGuard, employeeGuard],
    children: [
      {
        path: 'employeeDashboard',
        component: EmployeeDashboardComponent,
        title: 'employeeDashboard',
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
        path: 'tasks',
        component: TodoComponent,
        title: 'Task',
      },
      {
        path: 'salary-slip',
        component: SalaryslipComponent,
        title: 'Salary',
      },
    ],
  },
];
