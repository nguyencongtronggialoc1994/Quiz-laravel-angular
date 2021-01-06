import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {LoginComponent} from '../../login/login/login.component';
import {RegisterComponent} from '../../login/register/register.component';
import {ChangePasswordComponent} from '../../login/change-password/change-password.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'table-list', component: TableListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'changePassword/:id', component: ChangePasswordComponent},
];
