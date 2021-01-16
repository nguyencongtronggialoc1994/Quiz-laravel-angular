import {NotificationService} from '../../notification.service';
import {Category} from '../../category/Category';
import {QuizService} from '../quiz.service';
import {Quiz} from '../Quiz';
import {Observable} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quiz: Quiz = new Quiz();
  submited = false;

  constructor(
    private quizService: QuizService,
    private router: Router,
    private   notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {

  }

  isEmptyToken() {
    if (localStorage.getItem('AccessToken') && localStorage.getItem('role') == 'admin') {
      return true;
    } else {
      return false;
    }
  }

  showToasterSuccess() {
    this.notificationService.showSuccess('Thêm thành công', 'Thông báo!');
  }

  showToasterError() {
    this.notificationService.showError('Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án', 'Thông báo!');
  }

  newQuizz() {
    this.submited = false;
    this.quiz = new Quiz();
  }

  correctOption(value: string) {
    this.quiz.correctAnswer = value;
  }

  save() {
  console.log(this.quiz)
    this.quizService.createQuizz(this.quiz)
      .subscribe((data: any) => {
        console.log(100)
          console.log(data);
          if (data[0] == '404') {
            this.showToasterError();
          } else {
            this.showToasterSuccess();
            this.quiz = new Quiz();
            this.goToList();
          }

        },
        (error: any) => console.log(error));
  }

  // tslint:disable-next-line:typedef
  goToList() {
    this.router.navigate(['quizzes']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submited = true;
    this.save();

  }

}
