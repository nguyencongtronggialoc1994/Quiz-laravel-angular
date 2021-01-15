import {DeleteCategoryComponent} from './category/delete-category/delete-category.component';
import {UpdateCategoryComponent} from './category/update-category/update-category.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CreateCategoryComponent} from './category/create-category/create-category.component';
import {UpdateQuizComponent} from './quiz/update-quiz/update-quiz.component';
import {CreateQuizComponent} from './quiz/create-quiz/create-quiz.component';
import {DeleteQuizComponent} from './quiz/delete-quiz/delete-quiz.component';
import {QuizzesListComponent} from './quiz/quizzes-list/quizzes-list.component';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExamComponent} from './test/exam/exam.component';
import {TakeTestComponent} from './test/take-test/take-test.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {ChangePasswordComponent} from "./user/change-password/change-password.component";
import {DeleteUserComponent} from "./user/delete-user/delete-user.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {ResultsListComponent} from "./result-backend/results-list/results-list.component";
import {DeleteResultComponent} from "./result-backend/delete-result/delete-result.component";
import {CategoryDetailComponent} from "./category/category-detail/category-detail.component";

const routes: Routes = [
  {path: '', component: SidebarComponent},
  //user
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'delete-user/:id', component: DeleteUserComponent},
  {path: 'changePassword', component: ChangePasswordComponent},
  //quiz
  {path: 'quizzes', component: QuizzesListComponent},
  {path: 'create-quiz', component: CreateQuizComponent},
  {path: 'delete-quiz/:id', component: DeleteQuizComponent},
  {path: 'update-quiz/:id', component: UpdateQuizComponent},
  //category
  {path: 'category-add', component: CreateCategoryComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-detail/:id', component: CategoryDetailComponent},
  {path: 'update-category/:id', component: UpdateCategoryComponent},
  {path: 'delete-category/:id', component: DeleteCategoryComponent},


  {path: 'exam', component: ExamComponent},
  {path: 'test', component: TakeTestComponent},

  //result
  {path:'result-list',component: ResultsListComponent},
  {path:'delete-result/:id',component: DeleteResultComponent},
  //
  {path: 'exam', component: ExamComponent},
  {path: 'test/:id', component: TakeTestComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
