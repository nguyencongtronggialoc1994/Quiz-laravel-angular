import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../notification.service';
import {LoginService} from '../login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../User';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  password!: string;
  id!: number;
  data = {'password': this.password};

  constructor(
    private notificationService: NotificationService,
    private loginService: LoginService,
    private router: Router,
    private routerActive: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.routerActive.snapshot.params['id'];
  }


  changePassword() {
    console.log(this.data);
    this.loginService.changePassword(this.id, this.data).subscribe(
      data => {
        this.router.navigate(['/login']);
      }
    );
  }
}
