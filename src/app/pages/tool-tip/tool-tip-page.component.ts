import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip-page.component.html',
  styleUrls: ['./tool-tip-page.component.scss']
})
export class ToolTipPageComponent implements OnInit {

  sampleText = 'smurfs <em><b>are</b></em> forever';
  constructor() { }

  ngOnInit() {
  }

}
