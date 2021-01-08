import {Routes} from '@angular/router';
import {CreateQuizzesComponent} from '../../quizzes/create-quizzes/create-quizzes.component';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {TableListComponent} from '../../table-list/table-list.component';

import {QuizzesListComponent} from '../../quizzes/quizzes-list/quizzes-list.component';
import {UpdateQuizzesComponent} from '../../quizzes/update-quizzes/update-quizzes.component';

import {ListCategoriesComponent} from '../../categories/list-categories/list-categories.component';
import {CreateCategoriesComponent} from '../../categories/create-categories/create-categories.component';
import {UpdateCategoriesComponent} from '../../categories/update-categories/update-categories.component';
import { DeleteQuizzComponent } from '../../quizzes/delete-quizz/delete-quizz.component';


export const AdminLayoutRoutes: Routes = [

    {path: 'dashboard', component: DashboardComponent},
    {path: 'table-list', component: TableListComponent},

    {path: 'create-quiz', component: CreateQuizzesComponent},
    {path: 'quizzes-list', component: QuizzesListComponent},
    {path: 'update-quizz/:id', component: UpdateQuizzesComponent},
    {path: 'category-add', component: CreateCategoriesComponent},
    {path: 'category-list', component: ListCategoriesComponent},
    {path: 'category/:id', component: UpdateCategoriesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'table-list', component: TableListComponent},

    {path: 'create-quiz', component: CreateQuizzesComponent},
    {path: 'quizzes-list', component: QuizzesListComponent},
    {path: 'update-quizz/:id', component: UpdateQuizzesComponent},
    {path:'delete-quiz/:id', component:DeleteQuizzComponent},

    {path: 'category-list', component: ListCategoriesComponent},



  ]
;
