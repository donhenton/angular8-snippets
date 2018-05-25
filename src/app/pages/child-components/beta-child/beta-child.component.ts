import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beta-child',
   template: `<div class="row">beta-component</div>`,
  styleUrls: ['./beta-child.component.scss']
})
export class BetaChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
