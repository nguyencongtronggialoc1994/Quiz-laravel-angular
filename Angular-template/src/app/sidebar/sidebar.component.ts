import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  checkUser() {
    if (localStorage.getItem('role') == 'user')
      return true;
    else
      return false;
  }

  checkAdmin() {
    if (localStorage.getItem('role') == 'admin')
      return true;
    else return false;
  }
 logout(){
    localStorage.removeItem('role');
    localStorage.removeItem('AccessToken');
    this.router.navigate(['/']);
 }
  clickLogin() {
    this.router.navigate(['login']);
  }

  goToCategoryList() {
    this.router.navigate(['category-list']);
  }

  goToQuizList() {
    this.router.navigate(['quizzes']);
  }

  goToTest(){
    this.router.navigate(['exam'])
  }
}
