import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpha-child',
   template: `<div class="row">alpha-component</div>`,
  styleUrls: ['./alpha-child.component.scss']
})
export class AlphaChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
