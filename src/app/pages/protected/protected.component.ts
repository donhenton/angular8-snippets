import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './../../services/okta.service';
import * as JWT from 'jwt-decode';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  isAuthenticated: boolean;
  accessToken: any;
  idToken: any;

  constructor(private oktaAuthService: OktaAuthService) {
    this.accessToken = 'garbage';
    this.idToken = 'more garbage';
    const process = this.loadAuthData.bind(this);
    this.oktaAuthService.$isAuthenticated.subscribe(process);

  }

  async loadAuthData(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
     this.accessToken =  await this.oktaAuthService.getAccessToken();
     this.idToken =   await this.oktaAuthService.getIdToken() ;
     this.idToken.decoded = JWT( this.idToken.value);
     this.accessToken.decoded = JWT( this.accessToken.value);

  }

  ngOnInit() {

    this.oktaAuthService.isAuthenticated().then((auth) => {
      this.isAuthenticated = auth;

    });
  }
  login() {
    this.oktaAuthService.login('/');
  }
  logout() {
    this.oktaAuthService.logout();
  }
}
