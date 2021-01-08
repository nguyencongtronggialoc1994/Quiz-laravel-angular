import { Component, OnInit } from '@angular/core';
import {Categories} from '../Categories';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../categories.service';
import { NotificationService } from '../../notification.service';

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
              private categoryService: CategoriesService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.category = new Categories();

    this.id = this.route.snapshot.params['id'];

    this.categoryService.getCategory(this.id)
      .subscribe(data => {
        this.category = data;
      }, error => console.log(error));
  }

  showToasterSuccess(){
    this.notificationService.showSuccess("Cập nhật thành công","Thông báo!");
  }

  showToasterError(){
    this.notificationService.showError("Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án","Thông báo!");
  }
  updateCategory() {
    this.categoryService.updateCategory(this.id, this.category)
      .subscribe(data => {
        console.log(data);
        this.showToasterSuccess();
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
