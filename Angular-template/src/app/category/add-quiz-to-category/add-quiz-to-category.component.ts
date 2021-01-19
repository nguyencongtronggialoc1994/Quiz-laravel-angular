import { Quiz } from './../../quiz/Quiz';
import { Observable } from 'rxjs';
import { Category } from './../Category';
import { CategoryService } from './../category.service';
import { QuizService } from './../../quiz/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quiz-to-category',
  templateUrl: './add-quiz-to-category.component.html',
  styleUrls: ['./add-quiz-to-category.component.css']
})
export class AddQuizToCategoryComponent implements OnInit {
 id!: number;
 category: Category =new Category();
 categories!: Observable <Category[]>;
 quizzes!: Observable<Quiz[]>;
 quizzesOfCategory!: Observable<Quiz[]>;
 isHidden: boolean = false;
  constructor(
    private routerActive: ActivatedRoute,
    private quizService: QuizService,
    private categoryService:CategoryService
  ) { }

  ngOnInit(): void {
    this.id= this.routerActive.snapshot.params['id'];
    this.reloadData();
  }
  isEmptyToken() {
    if (
      localStorage.getItem('AccessToken') &&
      localStorage.getItem('role') == 'admin'
    )
      return true;
    else return false;
  }
  getQuizzesOfCategory2(){

    this.quizzes=this.quizService.getAllQuizzes();

  }
  getQuizzesOfCategory(){
    this.quizzesOfCategory=this.quizService.getQuizzesFindByCategoryId(this.id);

  }
  reloadData(){
    this.categoryService.getCategory(this.id).subscribe(
      data=>{
        this.category= data;
      }
    );
    this.getQuizzesOfCategory2();
    this.getQuizzesOfCategory();
  }
  addQuizToCategory(category_id:number,quiz_id: number){
    this.categoryService.addQuizToCategory(category_id, quiz_id).subscribe(
      data=>{
        console.log(data);
      }
    )
    this.quizzesOfCategory=this.quizService.getQuizzesFindByCategoryId(this.id);
    this.isHidden= true;

  }

delete(quiz_id:number,category_id: number){

  this.categoryService.deleteQuizFromCategory(quiz_id,category_id).subscribe(
    data=>console.log(data)
  )
  this.getQuizzesOfCategory();
}
}
