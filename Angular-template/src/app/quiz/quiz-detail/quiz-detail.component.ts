import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  quiz!: Quiz;
  id!: number;
  quizzes!: Observable<Quiz[]>;

  constructor(
    private quizzesService: QuizService,
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.quiz = new Quiz();


    this.id = this.route.snapshot.params["id"];

    this.quizzesService.getQuizzFindId(this.id).subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error: any) => console.log(error)
    );
  }
  isEmptyToken(){
    if (localStorage.getItem('AccessToken')&&localStorage.getItem('role')=='admin')
      return true;
    else return false;
  }

  quizzesList() {
    this.router.navigate(["quizzes"]);
  }

}
