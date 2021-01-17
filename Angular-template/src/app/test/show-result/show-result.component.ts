import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultService } from '../result.service';
import { Result } from '../results';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {
result!: Result;
id!: number;
  constructor(
    private resultService: ResultService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.result= new Result();
    this.id=this.route.snapshot.params['id'];
    this.resultService.getResultFindId(this.id)
    .subscribe((data:any)=>{
      console.log(data)
      this.result=data
    })
  }
 goToExam(){
    this.router.navigate(['/exam']);
 }
}
