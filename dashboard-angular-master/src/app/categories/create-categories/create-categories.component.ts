import { Component, OnInit } from '@angular/core';
import {Categories} from '../Categories';
import {CategoriesService} from '../categories.service';
import {Router} from '@angular/router';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {

  category: Categories = new Categories();
  submitted = false;

  constructor(private categoryService: CategoriesService,
              private router: Router,
              private notificationService: NotificationService) { }
  ngOnInit() {
  }
  showToasterSuccess(){
    this.notificationService.showSuccess("Cập nhật thành công","Thông báo!");
  }

  showToasterError(){
    this.notificationService.showError("Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án","Thông báo!");
  }


  Category(): void {
    this.submitted = false;
    this.category = new Categories();
  }

  save() {
    this.categoryService.createCategory(this.category).subscribe((data: any) => {
        console.log(data);
        this.showToasterSuccess()
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
