import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService,
              private router: Router,
              private wowService: NgwWowService
  ) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.wowService.init();
}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
