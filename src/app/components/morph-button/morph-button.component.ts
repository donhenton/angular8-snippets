
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Rx'; // for all
enum INTERNAL_STATE {
  initial,
  begin,
  incBorder,
  rotateSpinner,
  finalize
}

export enum BUTTON_STATE {
  waiting, done
}

@Component({
  selector: 'app-morph-button',
  templateUrl: './morph-button.component.html',
  styleUrls: ['./morph-button.component.scss']
})
export class MorphButtonComponent implements OnInit {



  currentState: INTERNAL_STATE = INTERNAL_STATE.initial;
  @Input() buttonText = 'Submit';
  @Output() submitCallback = new EventEmitter<any>();
  constructor(private el: ElementRef,
    private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  getContainerClassState() {
    const baseClass = 'morphing-indicator-button';
    if (this.currentState === INTERNAL_STATE.initial) {
      return baseClass;
    }
    if (this.currentState === INTERNAL_STATE.begin) {
      return baseClass + ' blue-button-to-circle';
    }
    if (this.currentState === INTERNAL_STATE.incBorder) {
      return baseClass + ' blue-button-to-circle inc-border';
    }
    if (this.currentState === INTERNAL_STATE.rotateSpinner) {
      return baseClass + ' blue-button-to-circle inc-border rotate-spinner';
    }
    if (this.currentState === INTERNAL_STATE.finalize) {
      return baseClass + ' blue-button-to-circle inc-border rotate-spinner finalize';
    }

  }

  getTextClassState() {
    const baseClass = 'button-text';
    if (this.currentState === INTERNAL_STATE.initial) {
      return baseClass;
    }

    if (this.currentState > INTERNAL_STATE.initial) {

      return baseClass + ' fade-text';
    }

  }

  getMarkerClassState() {
    const baseClass =  'complete-marker fi-check';
    if (this.currentState === INTERNAL_STATE.finalize) {
      return baseClass + ' show-checkmark';
    }
    return baseClass;
  }


  clickAction(ev) {

    if (this.currentState === INTERNAL_STATE.initial) {
      this.currentState = INTERNAL_STATE.begin;

    }


  }
  addBorder() {

    this.currentState = INTERNAL_STATE.incBorder;

    const caller = Observable.of(null).delay(25);
    caller.subscribe((e) => {
      this.currentState = INTERNAL_STATE.rotateSpinner;
    })
}


  public moveToFinish() {

    this.currentState = INTERNAL_STATE.finalize;

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

