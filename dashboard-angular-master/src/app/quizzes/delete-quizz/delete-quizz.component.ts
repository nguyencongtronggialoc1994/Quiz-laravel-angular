import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Categories } from "../../categories/Categories";
import { CategoriesService } from "../../categories/categories.service";

import { NotificationService } from "../../notification.service";
import { Quizz } from "../quizzes";
import { QuizzesService } from "../quizzes.service";

@Component({
  selector: "app-delete-quizz",
  templateUrl: "./delete-quizz.component.html",
  styleUrls: ["./delete-quizz.component.css"],
})
export class DeleteQuizzComponent implements OnInit {
  quiz!: Quizz;
  id!: number;
  quizzes!: Observable<Quizz[]>;
  category!: Categories;
  constructor(
    private quizzesService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.quiz = new Quizz();
    this.category = new Categories();

    this.id = this.route.snapshot.params["id"];

    this.quizzesService.getQuizzFindId(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.quiz = data;
        this.categoryService
          .getCategory(data.category_id)
          .subscribe((value) => {
            // console.log(1);
            this.category = value;
          });
      },
      (error: any) => console.log(error)
    );
  }

  deleteQuiz(id: number) {
    this.quizzesService.deleteQuizz(id).subscribe(
      (data: any) => {
        console.log(data);
        this.quizzesList();
        this.showToasterSuccess();
      },
      (error: any) => console.log(error)
    );
  }

  showToasterSuccess() {
    this.notificationService.showSuccess("Xóa thành công", "Thông báo!");
  }

  quizzesList() {
    this.router.navigate(["quizzes-list"]);
  }
}
