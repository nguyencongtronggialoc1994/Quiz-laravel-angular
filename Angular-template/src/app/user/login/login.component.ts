import {NotificationService} from '../../notification.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../user.service";
import {Observable} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  // id!: number;

  submitted: boolean = false;
  hide = true;
  result!: Observable<any>;

  constructor(private userService: UserService,
              private router: Router,
              private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
  }

  showToasterSuccess() {
    this.notificationService.showSuccess(
      'Đăng nhập thành công !!',
      'Thông báo'
    );
  }

  showToasterError() {
    this.notificationService.showError(
      'Đăng nhập thất bại Tài khoản hoặc mật khẩu không đúng !!',
      'thông báo'
    )
  }

  onSubmit() {
    this.submitted = true;
    this.login();
  }

  getIdByEmail() {
    this.userService.getIdByEmail(this.email).subscribe(data => {
      localStorage.setItem('idUser',data);
    });
  }

  getRole() {
    this.userService.getRole(this.email).subscribe((data) => {
      localStorage.setItem('role', data.roleName);
      localStorage.setItem('name', data.name);
    });
  }


  login() {
    this.userService.login(this.email, this.password).subscribe(data => {
      localStorage.setItem('AccessToken', data.token);
      this.showToasterSuccess();
      this.getIdByEmail();
      this.getRole();
      if (localStorage.getItem('role')=='user'){
        this.router.navigate(['/exam']);
      } else {
        this.router.navigate(['/category-list'])
      }


    }, error => this.showToasterError())
  }


  goToHome() {
    this.router.navigate(['/']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
