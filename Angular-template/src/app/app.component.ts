import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flash = false;
  title = 'demoSidebar';
  constructor(private router: Router) {
  }
  clickLogin(){
    this.router.navigate(['login'])
    this.flash=true;

  }
}
