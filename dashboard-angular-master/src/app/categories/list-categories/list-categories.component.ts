import { Component, OnInit } from '@angular/core';
import {Categories} from '../Categories';
import {Observable} from 'rxjs';
import {CategoriesService} from '../categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  constructor(private categoryService: CategoriesService,
              private router: Router) {}

  categories!: Observable<Categories[]>;
  deleteCategory(id: number) {
    this.router.navigate(['delete-category',id])

  }

  add() {
  this.router.navigate(['category-add']);
}
  updateCategory(id: number) {
    this.router.navigate(['category', id]);
  }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    // @ts-ignore
    this.categories = this.categoryService.getCategoryList();
  }

}
