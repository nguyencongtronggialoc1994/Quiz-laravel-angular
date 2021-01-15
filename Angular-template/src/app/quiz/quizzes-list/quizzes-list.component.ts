import {Router} from '@angular/router';
import {QuizService} from '../quiz.service';
import {Quiz} from '../Quiz';
import {Observable} from 'rxjs';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.css']
})
export class QuizzesListComponent implements OnInit {
  quizzes!: Observable<Quiz[]>;

  constructor(
    private quizzesService: QuizService,
    private router: Router
  ) {
  }

  isEmptyToken() {
    if (localStorage.getItem('AccessToken') && localStorage.getItem('role') == 'admin')
      return true;
    else return false;
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.quizzes = this.quizzesService.getAllQuizzes();
  }

  deleteQuizz(id: number) {
    this.router.navigate(['delete-quiz', id]);
  }

  search(data:string) {
    console.log(data);
    this.quizzes=this.quizzesService.search(data);
  }

  updateQuizz(id: number) {
    this.router.navigate(['update-quiz', id]);
  }

  add() {
    this.router.navigate(['create-quiz']);
  }
}
