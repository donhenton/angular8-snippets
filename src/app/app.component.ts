import { Component, OnInit } from '@angular/core';
// import { DropdownDirective } from './components/dropdown/dropdown.directive';
import { MenuDirective } from './components/dropdown/menu.directive';
import {
  ActivatedRoute,
  Router, Event, NavigationStart,
  NavigationEnd, NavigationCancel, NavigationError, ParamMap
} from '@angular/router';


/**
 * Main application page to indicate a wait window is required, define the menu link
 * as below
 *
 *
 * <li><a routerLink="/birtDemo" [queryParams]="{useWait: true}">BIRT Demo</a></li>
 *
 *
 *
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'app';
  loading = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.router.events.subscribe((routerEvent: Event) => {

      this.checkRouterEvent(routerEvent);
    });

  }

  checkRouterEvent(routerEvent: Event): any {

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }

    if (routerEvent instanceof NavigationStart
      && routerEvent.url.includes('useWait')) {

          this.loading = true;

    }

  }

  detectMenuOutsideClick(ev) {
    // console.log("responding in app.component "+ev)
    // this has been wired up as a demo of picking up events from directives
  }
}
// drop down menu in angular 2
// https://embed.plnkr.co/ouX2zkGeeTOroZF2COfC/
// https://stackoverflow.com/questions/34736161/how-do-i-create-a-dropdown-component-in-angular-2
// https://github.com/pleerock/ngx-dropdown

// wait indicator for resolve
// https://stackoverflow.com/questions/42048142/angular-2-resolver-with-loading-indicator


