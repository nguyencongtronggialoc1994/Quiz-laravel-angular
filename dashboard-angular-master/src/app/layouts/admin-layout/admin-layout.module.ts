import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {CreateCategoriesComponent} from '../../categories/create-categories/create-categories.component';
import {ListCategoriesComponent} from '../../categories/list-categories/list-categories.component';

import {LoginComponent} from '../../login/login/login.component';
import {RegisterComponent} from '../../login/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    TableListComponent,
    CreateCategoriesComponent,
    ListCategoriesComponent,
    LoginComponent,
    RegisterComponent,
  ]
})

export class AdminLayoutModule {}
