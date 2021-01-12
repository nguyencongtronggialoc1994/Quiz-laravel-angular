import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuizzesListComponent } from './quiz/quizzes-list/quizzes-list.component';
import { DeleteQuizComponent } from './quiz/delete-quiz/delete-quiz.component';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import { UpdateQuizComponent } from './quiz/update-quiz/update-quiz.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TakeTestComponent } from './test/take-test/take-test.component';
import { ExamComponent } from './test/exam/exam.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    QuizzesListComponent,
    DeleteQuizComponent,
    CreateQuizComponent,
    UpdateQuizComponent,
    LoginComponent,
    RegisterComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    TakeTestComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
