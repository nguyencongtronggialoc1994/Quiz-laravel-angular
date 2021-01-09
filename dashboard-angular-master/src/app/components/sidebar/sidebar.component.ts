import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: ''},
  // { path: '/icons', title: 'Icons',  icon: 'education_atom', class: '' },
  // { path: '/maps', title: 'Maps',  icon: 'location_map-big', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon: 'ui-1_bell-53', class: '' },


  // { path: '/user-profile', title: 'User Profile',  icon: 'users_single-02', class: '' },
  {path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: ''},
  {path: '/category-list', title: 'Category List', icon: 'design_bullet-list-67', class: ''},

  {path: '/quizzes-list', title: 'Quizz List', icon: 'design_bullet-list-67', class: ''},


  // { path: '/user-profile', title: 'User Profile',  icon: 'users_single-02', class: '' },
  {path: '/login', title: 'login', icon: 'users_single-02', class: ''},
  {path: '/register', title: 'Register', icon: 'users_single-02', class: ''},
  // { path: '/typography', title: 'Typography',  icon: 'text_caps-small', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon: 'objects_spaceship', class: 'active active-pro' }


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    localStorage.removeItem('AccessToken');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }

  checkUser() {
    if (localStorage.getItem('role') == "user") {
      return true;
    } else return false
  }
  checkAdmin() {
    if (localStorage.getItem('role') == "admin") {
      return true;
    } else return false
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
