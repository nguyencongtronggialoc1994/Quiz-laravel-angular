import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Quizz } from '../quizzes';
import { QuizzesService } from '../quizzes.service';

@Component({
  selector: 'app-create-quizzes',
  templateUrl: './create-quizzes.component.html',
  styleUrls: ['./create-quizzes.component.css']
})
export class CreateQuizzesComponent implements OnInit {
quizzes: Quizz = new Quizz();
submited=false;
  constructor(
    private quizzesService: QuizzesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newQuizz(){
    this.submited= false;
    this.quizzes= new Quizz();
  }

  save(){
    this.quizzesService.createQuizz(this.quizzes)
    .subscribe((data:any) => {
      console.log(data);
      this.quizzes= new Quizz();
      this.goToList();
    },
    (error: any)=> console.log(error));
  }

  goToList(){
    this.router.navigate(['quizzes-list'])
  }

  onSubmit(){
    this.submited= true;
    this.save();
  }

}
