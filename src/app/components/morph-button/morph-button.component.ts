import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-morph-button',
  templateUrl: './morph-button.component.html',
  styleUrls: ['./morph-button.component.scss']
})
export class MorphButtonComponent implements OnInit {




  @Input() buttonText = 'Submit';
  @Output() submitCallback =  new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  clickAction(ev) {

   // console.log(ev) mouseevent

    this.submitCallback.emit({event: 'alpha', buttonRef: this});
  }

}

