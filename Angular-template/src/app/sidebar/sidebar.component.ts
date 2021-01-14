import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getUserName() {
    return localStorage.getItem('name');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  checkUser() {
    return localStorage.getItem('role') == 'user';
  }

  checkLogin() {
    return !!localStorage.getItem('AccessToken');
  }

  checkAdmin() {
    return localStorage.getItem('role') == 'admin';
  }

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('AccessToken');
    localStorage.removeItem('name');
    this.router.navigate(['/']);
  }

  clickLogin() {
    this.router.navigate(['login']);
  }

  changePassword() {
    this.router.navigate(['changePassword']);
  }
}
