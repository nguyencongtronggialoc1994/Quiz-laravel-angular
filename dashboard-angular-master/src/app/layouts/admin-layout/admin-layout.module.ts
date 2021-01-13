import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {LoginComponent} from '../../login/login/login.component';
import {RegisterComponent} from '../../login/register/register.component';
import {ChangePasswordComponent} from '../../login/change-password/change-password.component';


import {CreateQuizzesComponent} from '../../quizzes/create-quizzes/create-quizzes.component';


import {CreateCategoriesComponent} from '../../categories/create-categories/create-categories.component';
import {ListCategoriesComponent} from '../../categories/list-categories/list-categories.component';
import {QuizzesListComponent} from '../../quizzes/quizzes-list/quizzes-list.component';
import {UpdateCategoriesComponent} from '../../categories/update-categories/update-categories.component';
import { DeleteQuizzComponent } from '../../quizzes/delete-quizz/delete-quizz.component';
import { DeleteCategoriesComponent } from '../../categories/delete-categories/delete-categories.component';
import { UpdateQuizComponent } from '../../quizzes/update-quiz/update-quiz.component';


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
      CreateQuizzesComponent,
      UpdateQuizComponent,
      CreateCategoriesComponent,
      ListCategoriesComponent,
      LoginComponent,
      RegisterComponent,
      ChangePasswordComponent,
      QuizzesListComponent,
      UpdateCategoriesComponent,
      DeleteQuizzComponent,
      DeleteCategoriesComponent,

]
})

export class AdminLayoutModule {
}
