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
  // deleteBook(id: number) {
  //   this.bookService.deleteBook(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // bookDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }
  //
  // updateBook(id: number){
  //   this.router.navigate(['update', id])
  // }


  ngOnInit() {
    this.reloadData();
    console.log(1);
  }

  reloadData() {
    this.categories = this.categoryService.getCategoryList();
  }

}
