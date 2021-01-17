import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/category/Category';
import { CategoryService } from 'src/app/category/category.service';
import { Quiz } from 'src/app/quiz/Quiz';
import { QuizService } from 'src/app/quiz/quiz.service';

@Component({
  selector: 'app-exam-management',
  templateUrl: './exam-management.component.html',
  styleUrls: ['./exam-management.component.css']
})
export class ExamManagementComponent implements OnInit {
categories!: Observable<Category[]>;
quizzes!: Observable<Quiz[]>;
array!: any[];
category!:number;
  constructor(
    private categoryService: CategoryService,
    private quizService: QuizService
    ) { }

  ngOnInit(): void {
    this.categories= this.categoryService.getCategoryList();
    this.quizzes=this.quizService.getAllQuizzes();
  }

 chooseQuiz(id: number){
this.array[id]=id;
 }

 chooseExam(id: number){
   this.category=id;
   console.log(this.category);
 }

 
}
