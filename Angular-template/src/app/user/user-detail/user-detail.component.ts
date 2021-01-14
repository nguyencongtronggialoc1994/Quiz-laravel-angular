import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../User";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id!: number;
  user: User = new User();

  constructor(
    private routerActive: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.id = this.routerActive.snapshot.params['id'];
    this.reloadData();
  }

  checkRoleUser(role: string) {
    if (role == 'user')
      return true;
    else return false;
  }

  checkRoleAdmin(role: string) {
    if (role == 'admin')
      return true;
    else return false;
  }

  authorize(id: number, role_id: number) {
    this.userService.updateRole(id, role_id).subscribe(
      data => {
        console.log(data)
        this.reloadData();
      }
    );
  }

  isEmptyToken() {
    if (localStorage.getItem('AccessToken') && localStorage.getItem('role') == 'admin')
      return true;
    else return false;
  }

  goToUserList() {
    this.router.navigate(['user-list']);
  }

  reloadData() {
    this.userService.getUser(this.id).subscribe(
      data => {
        this.user = data;
      }
    );
  }
}
