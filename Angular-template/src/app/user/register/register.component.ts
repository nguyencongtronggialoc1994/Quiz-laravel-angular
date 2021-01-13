import {Router} from '@angular/router';
import {NotificationService} from '../../notification.service';
import {UserService} from '../user.service';
import {Component, OnInit} from '@angular/core';
import {User} from "../User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name!: string;
  email!: string;
  userPassword!: string;
  submitted: boolean = false;
  hide = true;
  hide2 = true;
  user: User = new User();
  newPasswordConfirm: any;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.submitted = true;
    this.register();
  }

  showToasterSuccess() {
    this.notificationService.showSuccess('Đăng ký thành công.', 'Thông báo !');
  }

  showToasterError() {
    this.notificationService.showError(
      'Đăng ký thất bại',
      'email của quý khách đã có người sử dụng'
    );
  }

  showToasterError1() {
    this.notificationService.showError(
      'Xác nhận mật khẩu không đúng.Vui lòng nhập lại',
      'Thông báo'
    )

  }

  register() {
    if (this.userPassword == this.newPasswordConfirm) {
      this.userService
        .register({
          'name': this.name,
          'email': this.email,
          'password': this.userPassword,
          'role': '2',
        })
        .subscribe(data => {
          this.showToasterSuccess();
          this.router.navigate(['login']);

        }, error => this.showToasterError());
    } else {
      this.showToasterError1();
    }

  }
}
