import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {User} from "../User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: Observable<User[]>;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getUserList();
  }
  isEmptyToken(){
    if (localStorage.getItem('AccessToken')&&localStorage.getItem('role')=='admin')
      return true;
    else return false;
  }
  checkRoleUser(role: string){
    if (role=='user')
      return true;
    else return false;
  }
  checkRoleAdmin(role: string){
    if (role=='admin')
      return true;
    else return false;
  }
  getUserList() {
    this.users =this.userService.getUserList()
  }
  authorize(id: number,role_id:number){
    this.userService.updateRole(id,role_id).subscribe(
      data=>{
        console.log(data)
        this.getUserList();
      }
    );
  }

  userDetail(id:number){
    this.router.navigate(['user-detail',id]);
  }
}
