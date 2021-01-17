import {Category} from '../Category';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {CategoryService} from '../category.service';
import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  constructor(private categoryService: CategoryService,
              private router: Router,
              public dialog: MatDialog
              ) {
  }

  categories!: Observable<Category[]>;

  deleteCategory(id: number) {
    this.router.navigate(['delete-category', id]);

  }

  isEmptyToken() {
    if (localStorage.getItem('AccessToken') && localStorage.getItem('role') == 'admin')
      return true;
    else return false;
  }

  add() {
    this.router.navigate(['category-add']);
  }

  updateCategory(id: number) {
    this.router.navigate(['update-category', id]);
  }

  categoryDetail(id: number) {
    this.router.navigate(['category-detail',id])
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.categories = this.categoryService.getCategoryList();
  }
  

}
