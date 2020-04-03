import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './../../services/okta.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private oktaAuth: OktaAuthService) {
    this.oktaAuth.$isAuthenticated.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );

  }

  ngOnInit() {

    this.oktaAuth.isAuthenticated().then((auth) => {
      this.isAuthenticated = auth;
    });
  }
  login() {
    this.oktaAuth.login('/');
  }
  logout() {
    this.oktaAuth.logout();
  }
}
