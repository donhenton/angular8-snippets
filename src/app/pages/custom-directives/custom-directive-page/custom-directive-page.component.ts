import { Component, OnInit } from '@angular/core';
import {LoopCopyDirective} from './../loop-copy.directive';

const INFO_BASE = 'value is ';

@Component({
  selector: 'app-custom-directive-page',
  templateUrl: './custom-directive-page.component.html',
  styleUrls: ['./custom-directive-page.component.scss']
})
export class CustomDirectivePageComponent implements OnInit {


  public info: String = INFO_BASE;
  public repeatValue = 2;
  expansionStatus = '';

  constructor() { }

  ngOnInit() {
  }


  onExpandHandler(ev: any) {
      if (ev.isExpanded) {
        this.expansionStatus = 'You expanded the text!';
      } else {
        this.expansionStatus = 'You closed the text!';
      }

  }

}
