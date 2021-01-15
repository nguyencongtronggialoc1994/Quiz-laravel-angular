import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ResultService} from "../result.service";
import {Observable} from "rxjs";
import {Result} from "../Result";

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  results!: Observable<Result[]>

  constructor(
    private router: Router,
    private resultService: ResultService
  ) {
  }

  ngOnInit(): void {
    this.reloadData();
  }
  isEmptyToken(){
    if (localStorage.getItem('AccessToken')&&localStorage.getItem('role')=='admin')
      return true;
    else return false;
  }
  reloadData() {
    this.results = this.resultService.getResultList();
  }
  deleteResult(id:number){
    this.router.navigate(['delete-result',id]);
  }
}
