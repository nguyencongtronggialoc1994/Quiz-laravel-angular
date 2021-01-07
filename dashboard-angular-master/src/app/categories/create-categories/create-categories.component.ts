import { Component, OnInit } from '@angular/core';
import {Categories} from '../Categories';
import {CategoriesService} from '../categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {

  category: Categories = new Categories();
  submitted = false;

  constructor(private categoryService: CategoriesService,
              private router: Router) { }
  ngOnInit() {
  }

  Category(): void {
    this.submitted = false;
    this.category = new Categories();
  }

  save() {
    this.categoryService.createCategory(this.category).subscribe((data: any) => {
        console.log(data);
        this.category = new Categories();
        this.gotoList();
      },
      (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/category-list']);
  }


}
