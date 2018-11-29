
import {
  Component, OnInit, Input, Output, EventEmitter, HostListener,
  ElementRef, Renderer2, HostBinding, ViewChild, AfterViewInit
} from '@angular/core';
// import { MorphButtonComponent } from 'app/components/morph-button/morph-button.component';
import { trigger, style, transition, animate, group, state, keyframes } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MorphButtonComponent } from 'app/components/morph-button/morph-button.component';
import { BUTTON_STATE } from '../../constants/constants';
import { Observable } from 'rxjs/Rx'; // for all
// import {  delay } from 'rxjs/operators';

@Component({
  selector: 'app-morph-buttons-page',
  templateUrl: './morph-buttons-page.component.html',
  styleUrls: ['./morph-buttons-page.component.scss'],
})

export class MorphButtonsPageComponent implements OnInit, AfterViewInit {

  @ViewChild('morphButton') morphButton: MorphButtonComponent;

  taskComplete = false;
  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.morphButton)
  }


  buttonListener(ev) {

    if (ev.buttonState === BUTTON_STATE.waiting) {

      const caller = Observable.of(null).delay(1500);
      caller.subscribe((e) => {
        this.morphButton.moveToFinish();
      })


    }

    if (ev.buttonState === BUTTON_STATE.done) {
      this.taskComplete = true;

    }
  }

}



