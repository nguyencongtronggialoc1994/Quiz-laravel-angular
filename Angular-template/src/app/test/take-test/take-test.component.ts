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
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
quizzes!: Quiz[];
id!: number;
quiz!: Quiz;
point: number = 0;
array : any = [];
index!: number;
item!: any[];
result: Result= new Result();
  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.testService.getShowTestFindId(this.id)
    .subscribe((data: any)=>{

      this.quizzes=data;


    })
  }
 correctAnswer(value: string, id: any){

   this.array[id]=value;

   localStorage.setItem('answer',JSON.stringify(this.array));
}

onSubmit(){
this.testService.getShowTestFindId(this.id).subscribe(
  data=>{

    this.item=JSON.parse(localStorage.getItem('answer')!);

    for(let i=0;i<this.item.length;i++){

      if(this.item[i]!= null){
            if(this.item[i]==data[data.findIndex((quiz: { id: number; }) => quiz.id ==i)].correctAnswer){
                this.point+=1;
            }
      }
    }

this.result.point=this.point;
this.result.category_id=this.id;
this.result.user_id= parseInt(localStorage.getItem('idUser')!);
console.log(this.result)
    this.resultService.addResult(this.result).subscribe(
      value=>{
        console.log(value)
      }
    )


  }


);
}




}


