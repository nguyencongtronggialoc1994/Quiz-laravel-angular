import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizzesService } from '../../quizzes/quizzes.service';
import { NotificationService } from '../../notification.service';
import { Categories } from '../Categories';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-delete-categories',
  templateUrl: './delete-categories.component.html',
  styleUrls: ['./delete-categories.component.css']
})
export class DeleteCategoriesComponent implements OnInit {
category!: Categories;
id!: number;
categories!: Observable<Categories[]>
  constructor(
    private categoryService: CategoriesService,
    private quizzesService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService

  ) { }

  ngOnInit(): void {
    this.category=new Categories();
    this.id= this.route.snapshot.params['id'];
    this.categoryService.getCategory(this.id)
    .subscribe((data:any)=>{
      console.log(data);
      this.category=data;
    },(error:any)=>console.log(error));
  }

  deleteCategory(id: number){

    this.categoryService.deleteCategory(id)
    .subscribe((data:any)=>{
      console.log(data)
      this.categoriesList();
      this.showToasterSuccess()
    })
  }

  showToasterSuccess(){
    this.notificationService.showSuccess("Xóa thành công","Thông báo!");
  }

  categoriesList(){
    this.router.navigate(['category-list'])
  }

}
