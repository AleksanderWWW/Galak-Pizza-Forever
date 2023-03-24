import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-citizen-main-app',
  templateUrl: './citizen-main-app.component.html',
  styleUrls: ['./citizen-main-app.component.scss']
})
export class CitizenMainAppComponent {
  constructor(
    private router: Router
  ) {
  }

  logout() {
    this.router.navigateByUrl('login');
  }
}
