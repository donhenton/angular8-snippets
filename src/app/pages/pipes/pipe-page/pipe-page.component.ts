import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.scss']
})
export class PipePageComponent implements OnInit {

  public todaysDate = Date.now();
  public inputText = 'this is sample #text#stuff#bonzo you can be sure!';
  public jsonSample = {
    text: 'get a job',
    value: 35
  }
  constructor() { }

  ngOnInit() {
  }

}
