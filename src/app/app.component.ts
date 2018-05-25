import { Component } from '@angular/core';
// import { DropdownDirective } from './components/dropdown/dropdown.directive';
import { MenuDirective } from './components/dropdown/menu.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  detectMenuOutsideClick(ev) {
   // console.log("responding in app.component "+ev)
    // this has been wired up as a demo of picking up events from directives
  }
}
// drop down menu in angular 2
// https://embed.plnkr.co/ouX2zkGeeTOroZF2COfC/
// https://stackoverflow.com/questions/34736161/how-do-i-create-a-dropdown-component-in-angular-2
// https://github.com/pleerock/ngx-dropdown
