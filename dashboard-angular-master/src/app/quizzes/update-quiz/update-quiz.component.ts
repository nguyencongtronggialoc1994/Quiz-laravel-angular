import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import { Observable } from 'rxjs';
import { NotificationService } from '../../notification.service';
import { Categories } from '../../categories/Categories';
import { CategoriesService } from '../../categories/categories.service';
import { Quizz } from '../quizzes';
import { QuizzesService } from '../quizzes.service';


@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
id: number;
quiz!: Quizz;
categories!: Observable<Categories[]>;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizzesService,
    private categoryService: CategoriesService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.categories=this.categoryService.getCategoryList();
    this.quiz= new Quizz();
    this.id= this.route.snapshot.params['id'];
    this.quizService.getQuizzFindId(this.id)
    .subscribe(data =>{
      this.quiz=data;
    },error => console.log(error))
  }

  updateQuiz(){
    this.quizService.updateQuizz(this.id, this.quiz)
    .subscribe(data => {
      console.log(this.quiz);
      if(data[0]=='404'){
        this.showToasterError();
      }else{
        this.showToasterSuccess();
        this.quiz= new Quizz();
        this.goToList();
      }})

  }

  showToasterSuccess(){
    this.notificationService.showSuccess("Cập nhật thành công","Thông báo!");
  }

  showToasterError(){
    this.notificationService.showError("Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án","Thông báo!");
  }

  onSubmit(){
    this.updateQuiz();
  }

  goToList(){
    this.router.navigate(['quizzes-list'])
  }

}
