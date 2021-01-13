import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/category/Category';
import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
exams!: Observable<Category[]>;
  constructor(
    private router: Router,
    private categoriesService: CategoryService
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.exams = this.categoriesService.getCategoryList();
  }

  gotoTest(){
this.router.navigate(['test'])
  }

}
