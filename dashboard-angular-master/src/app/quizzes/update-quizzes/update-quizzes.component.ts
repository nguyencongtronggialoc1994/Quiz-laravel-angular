import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categories } from '../../categories/Categories';
import { CategoriesService } from '../../categories/categories.service';
import { Quizz } from '../quizzes';
import { QuizzesListComponent } from '../quizzes-list/quizzes-list.component';
import { QuizzesService } from '../quizzes.service';

@Component({
  selector: 'app-update-quizzes',
  templateUrl: './update-quizzes.component.html',
  styleUrls: ['./update-quizzes.component.css']
})
export class UpdateQuizzesComponent implements OnInit {
id!: number;
quizzes!: Quizz;
categories!: Observable<Categories[]>
  constructor(
    private quizzesService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categories= this.categoryService.getCategoryList();
    this.quizzes= new Quizz();
    this.id= this.route.snapshot.params['id'];
    this.quizzesService.getQuizzFindId(this.id)
    .subscribe((data: any)=>{
      console.log(data);
      this.quizzes=data;
    }, (error: any)=> console.log(error));
  }

  updateQuizz(){
    this.quizzesService.updateQuizz(this.id,this.quizzes)
    .subscribe((data: any)=>{
      console.log(data);
      this.quizzes= new Quizz();
      this.goToList();
    }, (error: any)=> console.log(error));
  }

  goToList(){
    this.router.navigate(['/quizzes-list'])
  }
   onSubmit(){
     this.updateQuizz();
   }

}
