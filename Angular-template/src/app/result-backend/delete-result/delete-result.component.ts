import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../notification.service";
import {ResultService} from "../result.service";

@Component({
  selector: 'app-delete-result',
  templateUrl: './delete-result.component.html',
  styleUrls: ['./delete-result.component.css']
})
export class DeleteResultComponent implements OnInit {
  id!: number;

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private resultService: ResultService,
    private routerActive: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.routerActive.snapshot.params['id'];
  }

  isEmptyToken() {
    if (localStorage.getItem('AccessToken') && localStorage.getItem('role') == 'admin')
      return true;
    else return false;
  }
  showToasterSuccess(){
    this.notificationService.showSuccess("Xóa thành công","Thông báo!");
  }
  deleteResult(){
    this.resultService.deleteResult(this.id).subscribe(
      data=>{
        this.showToasterSuccess();
        this.goToResultList();
      }
    )
  }
  goToResultList(){
    this.router.navigate(['result-list']);
  }
}
