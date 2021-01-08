import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {NotificationService} from '../../notification.service';
import {Router} from '@angular/router';
import {User} from '../User';
import  * as $ from "jquery";
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

  test(): void{
    var confirm_password = $('#confirm_password').val();
    var password = $('#password').val();
    var userName = $('#userName').val();
    var email = $('#email').val();
    if (confirm_password !== password || userName==null || email==null){
      alert("Đăng kí thất bại! Vui lòng nhập lại")
      return;
    }else {
      this.register();
    }
  }
  onSubmit() {
    this.submitted = true;
    this.test();
  }



  showToasterSuccess() {
    this.notificationService.showSuccess('Register successfully', 'notification');
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
