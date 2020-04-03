import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-auth-js';
 

// https://dzone.com/articles/add-authentication-to-your-angular-app


@Injectable({
  providedIn: 'root'
})
export class OktaAuthService  {
  CLIENT_ID = '0oa50kbe3200zNvhk4x6';
  ISSUER = 'https://dev-862436.okta.com/oauth2/default'
  LOGIN_REDIRECT_URI = 'http://localhost:4200/callback';
  LOGOUT_REDIRECT_URI = 'http://localhost:4200/';

  oktaAuth = new OktaAuth({
    clientId: this.CLIENT_ID,
    issuer: this.ISSUER,
    redirectUri: this.LOGIN_REDIRECT_URI,
    pkce: true
  });

  $isAuthenticated: Observable<boolean>;
  private observer: Observer<boolean>;


  constructor(private router: Router) {
     
    this.$isAuthenticated = new Observable((observer: Observer<boolean>) => {
      this.observer = observer;
      this.isAuthenticated().then(val => {
        observer.next(val);
      });
    });
  }
  async isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManger.
    return !!(await this.oktaAuth.tokenManager.get('accessToken'));
  }

  login(originalUrl: any) {
    // Save current URL before redirect
    sessionStorage.setItem('okta-app-url', originalUrl || this.router.url);

    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      scopes: ['openid', 'email', 'profile', 'groups']
    });
  }

  async handleAuthentication() {
    const parseResults = await this.oktaAuth.token.parseFromUrl();
    const tokens = parseResults['tokens'];
    const tokenKeys = Object.keys(tokens);
    tokenKeys.forEach(key => {
      this.oktaAuth.tokenManager.add(key, tokens[key]);
    });

    if (await this.isAuthenticated()) {
      if(this.observer) {
        this.observer.next(true);
      }
    }

    // Retrieve the saved URL and navigate back
    const url = sessionStorage.getItem('okta-app-url');
    this.router.navigateByUrl(url);
  }

  async logout() {
    await this.oktaAuth.signOut({
      postLogoutRedirectUri: this.LOGOUT_REDIRECT_URI
    });
  }

}
