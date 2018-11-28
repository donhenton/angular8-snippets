
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, query, state, keyframes } from '@angular/animations';
import {BUTTON_STATE} from '../../constants/constants';
import { Observable } from 'rxjs/Rx'; // for all
export enum STATE {
  initial,
  begin,
  incBorder,
  rotateSpinner,
  finalize
}

@Component({
  selector: 'app-morph-button',
  templateUrl: './morph-button.component.html',
  styleUrls: ['./morph-button.component.scss']
})
export class MorphButtonComponent implements OnInit {



  currentState: STATE = STATE.initial;
  @Input() buttonText = 'Submit';
  @Output() submitCallback = new EventEmitter<any>();
  constructor(private el: ElementRef,
    private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  getContainerClassState() {
    const baseClass = 'morphing-indicator-button';
    if (this.currentState === STATE.initial) {
      return baseClass;
    }
    if (this.currentState === STATE.begin) {
      return baseClass + ' blue-button-to-circle';
    }
    if (this.currentState === STATE.incBorder) {
      return baseClass + ' blue-button-to-circle inc-border';
    }
    if (this.currentState === STATE.rotateSpinner) {
      return baseClass + ' blue-button-to-circle inc-border rotate-spinner';
    }
    if (this.currentState === STATE.finalize) {
      return baseClass + ' blue-button-to-circle inc-border rotate-spinner finalize';
    }

  }

  getTextClassState() {
    const baseClass = 'button-text';
    if (this.currentState === STATE.initial) {
      return baseClass;
    }

    if (this.currentState > STATE.initial) {

      return baseClass + ' fade-text';
    }

  }

  getMarkerClassState() {
    const baseClass =  'complete-marker fi-check';
    if (this.currentState === STATE.finalize) {
      return baseClass + ' show-checkmark';
    }
    return baseClass;
  }


  clickAction(ev) {

    if (this.currentState === STATE.initial) {
      this.currentState = STATE.begin;

    }


  }
  addBorder() {

    this.currentState = STATE.incBorder;
    window.setTimeout(() => {
      this.currentState = STATE.rotateSpinner;
    }, 25)

}


  public moveToFinish() {

    this.currentState = STATE.finalize;

}


  @HostListener('animationend', ['$event']) animationEnd(ev) {


    if (ev.animationName === 'to-blue-circle') {

      this.addBorder();
      this.submitCallback.emit({buttonState: BUTTON_STATE.waiting})

    }
    if (ev.animationName === 'finalize') {
      this.submitCallback.emit({buttonState: BUTTON_STATE.done})

    }

  }


}

