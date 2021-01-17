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


import { TakeTestComponent } from './test/take-test/take-test.component';
import { ExamComponent } from './test/exam/exam.component';


import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from "@angular/cdk/portal";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { NotFoundComponent } from './not-found/not-found.component';

import { ShowResultComponent } from './test/show-result/show-result.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { ResultsListComponent } from './result-backend/results-list/results-list.component';
import { DeleteResultComponent } from './result-backend/delete-result/delete-result.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { SearchCategoryComponent } from './category/search-category/search-category.component';
import { QuizDetailComponent } from './quiz/quiz-detail/quiz-detail.component';
import { ExamManagementComponent } from './test/exam-management/exam-management.component';
import{CountdownModule}from 'ngx-countdown';







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
    NotFoundComponent,
    TakeTestComponent,
    ExamComponent,

    ShowResultComponent,

    UserListComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    ChangePasswordComponent,
    UserDetailComponent,
    ResultsListComponent,
    DeleteResultComponent,
    CategoryDetailComponent,
    SearchCategoryComponent,
    QuizDetailComponent,
    ExamManagementComponent,
    



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
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
