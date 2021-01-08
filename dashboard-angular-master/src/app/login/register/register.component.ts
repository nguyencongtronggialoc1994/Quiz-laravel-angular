import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {NotificationService} from '../../notification.service';
import {Router} from '@angular/router';
import {User} from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  submitted: boolean = false;

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router,
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

  register() {
    this.loginService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.user = new User();
        this.showToasterSuccess();
        this.router.navigate(['login']);
      }
    );
  }
}
