import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { QuizzesListComponent } from './quizzes/quizzes-list/quizzes-list.component';
import { UpdateQuizzesComponent } from './quizzes/update-quizzes/update-quizzes.component';
<<<<<<< HEAD
import { UpdateCategoriesComponent } from './categories/update-categories/update-categories.component';
=======


>>>>>>> 7578fa49ede29ca45c39bc6231afa834b1ef23f3


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),



<<<<<<< HEAD

=======
>>>>>>> 7578fa49ede29ca45c39bc6231afa834b1ef23f3
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    QuizzesListComponent,
<<<<<<< HEAD
    UpdateCategoriesComponent,
=======
>>>>>>> 7578fa49ede29ca45c39bc6231afa834b1ef23f3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
