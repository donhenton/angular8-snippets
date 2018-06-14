import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip-page.component.html',
  styleUrls: ['./tool-tip-page.component.scss']
})
export class ToolTipPageComponent implements OnInit {

  sampleText = 'smurfs are <em><b>really</b></em> cool because they are blue';
  constructor() { }

  ngOnInit() {
  }

}
