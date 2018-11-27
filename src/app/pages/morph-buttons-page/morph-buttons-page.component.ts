
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
// import { MorphButtonComponent } from 'app/components/morph-button/morph-button.component';
import { trigger, style, transition, animate, group, state, keyframes } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-morph-buttons-page',
  templateUrl: './morph-buttons-page.component.html',
  styleUrls: ['./morph-buttons-page.component.scss'],
})

export class MorphButtonsPageComponent implements OnInit {


  animateChoices = { choice: 'basic' };

  constructor() {

  }

  ngOnInit() {
  }



}


@Component({
  selector: 'app-animbox',
  template: ``,
  // template: `<div [@changeState]="currentState" class="mybox"></div>`,
  styleUrls: ['./morph-buttons-page.component.scss'],
})
export class AnimboxComponent implements OnInit {

  @Input() currentState;
  @Output() eventItem = new EventEmitter<string>();


  private counter = 0;


  constructor(private el: ElementRef,
    private renderer: Renderer2) {

  }

  ngOnInit(): void {

  }




}

