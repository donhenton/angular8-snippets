import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-include-consumer',
  template: `
    <ul class="basic-list">

    <li><b>Consumer Shell Group 1 Content pulled in --></b> <ng-content select=".select-1"></ng-content></li>
    <li><b>Consumer Shell Group 2 Content pulled in --></b> <ng-content select=".select-2"></ng-content></li>


    </ul>

    <div class="row grouping well">
      <p class="row">The table below is computed in include.page.component</p>
      <ng-content select=".compute-content"></ng-content>
    </div>



   ` ,
  styleUrls: ['./include-consumer.component.scss']
})
export class IncludeConsumerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
