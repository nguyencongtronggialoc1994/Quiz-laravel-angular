import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { CategoriesService } from '../../categories/categories.service';
import { Categories } from '../../categories/Categories';
import { Quizz } from '../quizzes';
import { QuizzesService } from '../quizzes.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-create-quizzes',
  templateUrl: './create-quizzes.component.html',
  styleUrls: ['./create-quizzes.component.css']
})
export class CreateQuizzesComponent implements OnInit {
quizzes: Quizz = new Quizz();
submited=false;
categories!: Observable<Categories[]>;

  constructor(
    private quizzesService: QuizzesService,
    private router: Router,
    private categoryService: CategoriesService,
    private   notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    this.categories=this.categoryService.getCategoryList();
    console.log(this.categories)
  }

  showToasterSuccess(){
    this.notificationService.showSuccess("Thêm thành công","Thông báo!");
  }

  showToasterError(){
    this.notificationService.showError("Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án","Thông báo!");
  }

  newQuizz(){
    this.submited= false;
    this.quizzes= new Quizz();
  }



  save(){

    this.quizzesService.createQuizz(this.quizzes)
    .subscribe((data:any) => {
      console.log(data);
      console.log(data);
      if(data[0]=='404'){
        this.showToasterError();
      }else{
        this.showToasterSuccess();
        this.quizzes= new Quizz();
        this.goToList();
      }

    },
    (error: any)=> console.log(error));
  }

  goToList(){
    this.router.navigate(['quizzes-list'])
  }

  onSubmit(){
    this.submited= true;
    this.save();

  }

}
