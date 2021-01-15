import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {NotificationService} from "../../notification.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldPassword!: string;
  newPassword!: string;
  confirmPassword!: string;
  id!: string | null;
  hide!: boolean;
  hide2!: boolean;
  private router: any;
  hide3!: boolean;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {

  }

  showToasterSuccess() {
    this.notificationService.showSuccess('Đổi mật khẩu thành công', 'Thông báo')
  }

  showToasterError() {
    this.notificationService.showError('Đổi mật khẩu Thất bại! Mật khẩu cũ hoặc xác nhận mật khẩu sai.', 'Thông báo !')
  }

  changePassword() {
    console.log(localStorage.getItem('idUser'))
    this.userService.changePassword(localStorage.getItem('idUser'), this.oldPassword, this.newPassword, this.confirmPassword).subscribe(
      data => {
        this.showToasterSuccess()
      }, error => this.showToasterError()
    )
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
