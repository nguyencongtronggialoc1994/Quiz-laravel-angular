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
  submitted = false;

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.login();
  }
  showToasterSuccess() {
    this.notificationService.showSuccess('Login successfully !!', 'welcome to page');
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        console.log(data.token);
        localStorage.setItem('AccessToken', data.token);
        this.showToasterSuccess();
      }
    );
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
