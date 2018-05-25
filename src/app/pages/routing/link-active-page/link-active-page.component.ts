import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';

@Component({
  selector: 'app-link-active-page',
  templateUrl: './link-active-page.component.html',
  styleUrls: ['./link-active-page.component.scss']
})
export class LinkActivePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {




  }

  ngOnInit() {
  }

  navigateWithQueryParams(ev: any) {
    ev.preventDefault();

    const paramInstructions = <NavigationExtras>{};
    paramInstructions.relativeTo = this.route;
    paramInstructions.queryParamsHandling = 'merge';
    paramInstructions.queryParams = { alpha: 'yo bozo', beta: 'kiss me you fool!' }



    this.router.navigate(['queryRoute'], paramInstructions);
  }

  /**
   * this navigates relative to the current path, which is this.route
   * @param ev
   */
  navigateWithPathParams(ev: any) {
    ev.preventDefault();

    this.router.navigate(['queryRoute', { alpha: 33, beta: 'geta  job' }], { relativeTo: this.route })
  }
}
