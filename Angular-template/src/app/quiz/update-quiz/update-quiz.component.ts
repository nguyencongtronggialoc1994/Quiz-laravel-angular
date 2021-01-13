import {Observable} from 'rxjs';
import {NotificationService} from '../../notification.service';
import {CategoryService} from '../../category/category.service';
import {QuizService} from '../quiz.service';
import {Category} from '../../category/Category';
import {Quiz} from '../Quiz';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  id!: number;
  quiz!: Quiz;
  categories!: Observable<Category[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private quizService: QuizService,
              private categoryService: CategoryService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategoryList();
    this.quiz = new Quiz();
    this.id = this.route.snapshot.params['id'];
    this.quizService.getQuizzFindId(this.id)
      .subscribe(data => {
        this.quiz = data;
      }, error => console.log(error));
  }
  isEmptyToken(){
    if (localStorage.getItem('AccessToken')&&localStorage.getItem('role')=='admin')
      return true;
    else return false;
  }
  updateQuiz() {
    this.quizService.updateQuizz(this.id, this.quiz)
      .subscribe((data: any) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data[0] == '404') {
          this.showToasterError();
        } else {
        this.showToasterSuccess();
        this.goToList();
        this.quiz = new Quiz();
        }
      });

  }

  showToasterSuccess() {
    this.notificationService.showSuccess('Cập nhật thành công', 'Thông báo!');
  }

  showToasterError() {
    this.notificationService.showError('Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án', 'Thông báo!');
  }

  onSubmit() {
    this.updateQuiz();
  }

  goToList() {
    this.router.navigate(['quizzes']);
  }
}
