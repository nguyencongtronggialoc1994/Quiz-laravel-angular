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
import { CreateQuizzesComponent } from './quizzes/create-quizzes/create-quizzes.component';




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



  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
<<<<<<< HEAD
=======
    CreateQuizzesComponent

>>>>>>> 8d6a80bfd9f8bad24f72d81c206c980c0507d289
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
