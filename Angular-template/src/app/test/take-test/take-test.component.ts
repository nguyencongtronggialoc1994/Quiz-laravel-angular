import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { QuizService } from 'src/app/quiz/quiz.service';

import { Quiz } from '../../quiz/Quiz';

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
quiz_Id!: number;
quiz_answer!: string;
index!: number;
item!: any[];
  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.testService.getShowTestFindId(this.id)
    .subscribe((data: any)=>{

      this.quizzes=data;


    })
  }
 correctAnswer(value: string, id: any){
  //  const data={
  //     'id':id,
  //    'value':value
  //  };
   this.array[id]=value;
  //  console.log(this.array);
   localStorage.setItem('answer',JSON.stringify(this.array));
}

onSubmit(){
this.testService.getShowTestFindId(this.id).subscribe(
  data=>{
    // let idx= data.findIndex((quiz: { id: number; }) => quiz.id ===45);

    // console.log(data[idx].correctAnswer);
    this.item=JSON.parse(localStorage.getItem('answer')!);

    for(let i=0;i<this.item.length;i++){

      if(this.item[i]!= null){
            if(this.item[i]==data[data.findIndex((quiz: { id: number; }) => quiz.id ==i)].correctAnswer){
                this.point+=1;

            }

      }
    }
    console.log(this.point);
  }
);
}




}


