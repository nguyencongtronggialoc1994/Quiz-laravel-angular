import { Component, OnInit } from '@angular/core';
import {Categories} from '../Categories';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit {

  id!: number;
  category!: Categories;
  public submitted: boolean | undefined;

  constructor(private route: ActivatedRoute, private router: Router,
              private categoryService: CategoriesService) { }

  ngOnInit() {
    this.category = new Categories();

    this.id = this.route.snapshot.params['id'];

    this.categoryService.getCategory(this.id)
      .subscribe(data => {
        this.category = data;
      }, error => console.log(error));
  }
  updateCategory() {
    this.categoryService.updateCategory(this.id, this.category)
      .subscribe(data => {
        console.log(data);
        this.category = new Categories();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCategory();
  }

  gotoList() {
    this.router.navigate(['/category-list']);
  }


}
