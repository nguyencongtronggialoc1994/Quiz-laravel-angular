import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quizz } from '../quizzes';
import { QuizzesService } from '../quizzes.service';

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.css']
})
export class QuizzesListComponent implements OnInit {
quizzes!: Observable<Quizz[]>;
  constructor(
    private quizzesService: QuizzesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.quizzes=this.quizzesService.getAllQuizzes();
  }

  deleteQuizz(id: number){
    this.quizzesService.deleteQuizz(id)
    .subscribe((data: any)=>{
      console.log(data);
      this.reloadData();
    },
    (error: any)=> console.log(error));

  }

 updateQuizz(){}

}
