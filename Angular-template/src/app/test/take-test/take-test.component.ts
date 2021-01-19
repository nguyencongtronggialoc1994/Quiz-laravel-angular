import { NotificationService } from './../../notification.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { QuizService } from 'src/app/quiz/quiz.service';

import { Quiz } from '../../quiz/Quiz';
import { ResultService } from '../result.service';
import { Result } from '../results';

import { TestService } from '../test.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css'],
})
export class TakeTestComponent implements OnInit {
  quizzes!: Quiz[];
  id!: number;
  user_id!: number;
  quiz!: Quiz;
  point: number = 0;
  array: any = [];
  index!: number;
  item!: any[];
  result: Result = new Result();
  counter: any = 120;
  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private resultService: ResultService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.startCountDown();
    this.id = this.route.snapshot.params['id'];
    this.testService.getShowTestFindId(this.id).subscribe((data: any) => {
      this.quizzes = data;
    });
  }
  correctAnswer(value: string, id: any) {
    this.array[id] = value;

    localStorage.setItem('answer', JSON.stringify(this.array));
  }

  onSubmit() {
    this.testService.getShowTestFindId(this.id).subscribe((data) => {
      this.item = JSON.parse(localStorage.getItem('answer')!);
      if(this.item){
        for (let i = 0; i < this.item.length; i++) {
          if (this.item[i] != null) {
            if (
              this.item[i] ==
              data[data.findIndex((quiz: { id: number }) => quiz.id == i)]
                .correctAnswer
            ) {
              this.point += 1;
            }
          }
        }
      }else{
        this.point=0;
      }
      this.counter = null;
      localStorage.removeItem('answer');
      this.result.point = this.point;
      this.result.category_id = this.id;
      this.result.user_id = parseInt(localStorage.getItem('idUser')!);
      console.log(this.result);
      this.resultService.addResult(this.result).subscribe((value: any) => {
        console.log(value.id);

        this.goToShowResult(value.id);
      });
    });
  }

  goToShowResult(id: number) {
    this.router.navigate(['results', id]);
  }
  startCountDown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }
  processCountdown() {
    if (this.counter == 0) {
      setTimeout(() => {
        this.onSubmit();
      }, 1000);
      this.showToasterError();
    } else {
      this.startCountDown();
    }
  }
  timeToString(seconds: number) {
    return new Date(seconds * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)![0];
  }
  showToasterError() {
    this.notificationService.showError('Hết thời gian làm bài', 'Thông báo!');
  }
}
