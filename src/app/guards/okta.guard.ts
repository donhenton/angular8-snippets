import { Injectable } from '@angular/core';
import {
  Router, CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { OktaAuthService } from './../services/okta.service';


@Injectable({
  providedIn: 'root'
})
export class OktaGuard implements CanActivate {
  constructor(private okta: OktaAuthService, private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authenticated = await this.okta.isAuthenticated();
    if (authenticated) { return true; }

    // Redirect to login flow.
    console.log("url "+state.url)
    this.okta.login(state.url);
    return false;
  }

}
