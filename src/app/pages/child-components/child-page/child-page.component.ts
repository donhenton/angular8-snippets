import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-page',
   template: `
   <h3>Child Components</h3>
  <div class="row">The content below is inserted via child routes.</div><div class="row"> There is a separate module that contains
  the child routes, so that they can be defined someplace other than the main app.module</div>

  <div class="row child-area"><router-outlet></router-outlet></div>

  `,
  styleUrls: ['./child-page.component.scss']
})
export class ChildPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
