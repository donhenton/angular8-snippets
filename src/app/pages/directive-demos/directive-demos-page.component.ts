import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directive-demos-page',
  templateUrl: './directive-demos-page.component.html',
  styleUrls: ['./directive-demos-page.component.scss']
})
export class StandardDirectiveComponent implements OnInit {
  public loopItems = [

    { text: 'alpha' },
    { text: 'beta' },
    { text: 'gamma' },
    { text: 'epsilon' },
    { text: 'theta' },

  ];

  public flipIndicator = false;
  public ifIndicator = false;
  public switchState: number = -1;
  public eventText = 'This is where event text will go'

  constructor() { }

  ngOnInit() {
  }


  public flipRowHighlighting() {
    this.flipIndicator = !this.flipIndicator;

  }

  public computeCss(index, isOdd) {
    let cssValue = '';
    if (isOdd) {
      cssValue = 'odd_row ';
    } else {
      cssValue = 'even_row ';
    }
    cssValue += 'flip_' + (this.flipIndicator + '')

    return cssValue;

  }

  public handleEvent(ev: string) {
    this.eventText = ev;
  }

  public doIfChange() {
    this.ifIndicator = !this.ifIndicator;

  }

  // http://www.concretepage.com/angular-2/angular-2-ngswitch-example
  public doSwitchChange() {

    this.switchState = (this.switchState + 1) % 3;

  }

}


@Component({
  selector: 'app-event-button',
  template: `<button class="btn btn-red"  (click)="clickAction()">Click to emit an Event</button>`
})
export class EventBindingButtonComponent implements OnInit {

  @Input() baseText = 'default ';
  @Output() eventItem = new EventEmitter<string>();
  private counter = 0;
  ngOnInit(): void {

  }



  clickAction() {
    this.counter++;

    // console.log("do it " + this.baseText+" "+this.counter)
    this.eventItem.emit(this.baseText + ' ' + this.counter);
  }


}
