import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Quiz} from '../../quiz/Quiz';

import {TestService} from '../test.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  quizzes!: Quiz[];
  id!: number;

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.testService.getShowTestFindId(this.id)
      .subscribe((data: any) => {
        // console.log(data[0]);
        this.quizzes = data;
        console.log(this.quizzes)

      })
  }

}
