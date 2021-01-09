import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
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
  constructor(private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizzesService) { }

  ngOnInit(): void {
    this.quiz= new Quizz();
    this.id= this.route.snapshot.params['id'];
    this.quizService.getQuizzFindId(this.id)
    .subscribe(data =>{
      console.log(data);
      this.quiz=data;
    },error => console.log(error))
  }

  updateQuiz(){
    this.quizService.updateQuizz(this.id, this.quiz)
    .subscribe(data => {
      console.log(data);
      this.quiz= new Quizz();
      this. goToList();
    }, error => console.log(error))
  }

  onSubmit(){
    this.updateQuiz();
  }

  goToList(){
    this.router.navigate(['quizzes-list'])
  }

}
