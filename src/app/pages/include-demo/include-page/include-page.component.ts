import { Component, OnInit } from '@angular/core';
import { IncludeConsumerComponent } from './../include-consumer/include-consumer.component';

@Component({
  selector: 'app-include-page',
  templateUrl: './include-page.component.html',
  styleUrls: ['./include-page.component.scss']
})
export class IncludePageComponent implements OnInit {
  public loopItems = [

    { text: 'alpha' },
    { text: 'beta' },
    { text: 'gamma' },
    { text: 'epsilon' },
    { text: 'theta' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
