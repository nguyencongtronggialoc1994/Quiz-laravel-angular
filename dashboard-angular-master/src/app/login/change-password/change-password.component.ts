import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../notification.service';
import {LoginService} from '../login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  password!: string;
  id!: number;
  // data = {'password': this.password};

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
    this.loginService.changePassword(this.id, {'password': this.password}).subscribe(
      data => {
        this.router.navigate(['/login']);
      }
    );
  }
}
