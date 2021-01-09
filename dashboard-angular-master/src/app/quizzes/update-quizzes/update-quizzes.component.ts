
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { NotificationService } from '../../notification.service';
import {Categories} from '../../categories/Categories';
import {CategoriesService} from '../../categories/categories.service';
import {Quizz} from '../quizzes';

import {QuizzesService} from '../quizzes.service';


@Component({
  selector: 'app-update-quizzes',
  templateUrl: './update-quizzes.component.html',
  styleUrls: ['./update-quizzes.component.css']
})
export class UpdateQuizzesComponent implements OnInit {
  id!: number;
  quizzes!: Quizz;
  categories!: Observable<Categories[]>;

  constructor(
    private quizzesService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoriesService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategoryList();
    this.quizzes = new Quizz();
    this.id = this.route.snapshot.params['id'];
    this.quizzesService.getQuizzFindId(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.quizzes = data;
      }, (error: any) => console.log(error));
  }
  showToasterSuccess(){
    this.notificationService.showSuccess("Cập nhật thành công","Thông báo!");
  }

  showToasterError(){
    this.notificationService.showError("Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án","Thông báo!");
  }

  updateQuizz() {
    this.quizzesService.updateQuizz(this.id, this.quizzes)
      .subscribe((data: any) => {
        console.log(data);
        if(data[0]=='404'){
          this.showToasterError();
        }else{
          this.showToasterSuccess()
          this.quizzes = new Quizz();
          this.goToList();
        }

      }, (error: any) => console.log(error));
  }

  goToList() {
    this.router.navigate(['/quizzes-list']);
  }

  onSubmit() {
    this.updateQuizz();
  }

}
