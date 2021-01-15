import { Pipe ,PipeTransform} from '@angular/core';
import {Component, OnInit,OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {timer, Subscription} from "rxjs";

import {Quiz} from '../../quiz/Quiz';

import {TestService} from '../test.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit,OnDestroy {
  quizzes!: Quiz[];
  id!: number;
//
  countDown!: Subscription | null;
  counter = 1800;
  tick = 1000;

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  ngOnDestroy(){
    this.countDown=null;
  }
  ngOnInit(): void {
    //
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);

    //
    this.id = this.route.snapshot.params['id'];
    this.testService.getShowTestFindId(this.id)
      .subscribe((data: any) => {
        // console.log(data[0]);
        this.quizzes = data;
        console.log(this.quizzes)

      })
    // this.displayTimeElapsed();
  }


}

@Pipe({
  name: "formatTime"
})

export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}

