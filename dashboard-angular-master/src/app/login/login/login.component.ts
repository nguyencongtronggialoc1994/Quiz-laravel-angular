import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {NotificationService} from '../../notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  id!: number;


  submitted: boolean = false;


  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  showToasterSuccess() {
    this.notificationService.showSuccess('Đăng nhập thành công !!', 'Thông báo');
  }


  onSubmit() {
    this.submitted = true;
    this.login();
    this.getRole();
  }


  getIdByEmail() {
    this.loginService.getIdByEmail(this.email).subscribe(
      data => {
        this.id = data;
      }
    );
  }

  getRole() {
    this.loginService.getRole(this.email).subscribe(
      data => {
        localStorage.setItem('role', data.name);
      }
    )
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        localStorage.setItem('AccessToken', data.token);
        this.showToasterSuccess();
        this.getIdByEmail();
        if (localStorage.getItem('role') == 'user')
          this.router.navigate(['table-list']);
        if (localStorage.getItem('role')=='admin')
          this.router.navigate(['quizzes-list'])
          }
    );
  }

  goToChangePassword() {
    this.router.navigate(['changePassword', this.id]);
    // console.log(this.id);

  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
