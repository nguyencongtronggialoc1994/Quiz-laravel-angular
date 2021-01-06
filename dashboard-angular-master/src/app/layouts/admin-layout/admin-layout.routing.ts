import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import {ListCategoriesComponent} from '../../categories/list-categories/list-categories.component';
import {LoginComponent} from '../../login/login/login.component';
import {RegisterComponent} from '../../login/register/register.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
  { path: 'category-list', component: ListCategoriesComponent },
    { path: 'login',     component: LoginComponent },
    { path: 'register',     component: RegisterComponent },
];
