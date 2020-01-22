
import {
  Component, OnInit, ViewChild, AfterViewInit
} from '@angular/core';
import { MorphButtonComponent, BUTTON_STATE } from 'app/components/morph-button/morph-button.component';
import { Observable } from 'rxjs/Rx'; // for all

@Component({
  selector: 'app-morph-buttons-page',
  templateUrl: './morph-buttons-page.component.html',
  styleUrls: ['./morph-buttons-page.component.scss'],
})

export class MorphButtonsPageComponent implements OnInit, AfterViewInit {

  @ViewChild('morphButton',{ static: false }) morphButton: MorphButtonComponent;

  taskComplete = false;
  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.morphButton) just testing that viewchild worked
  }

/**
 * this is the routine that will listen to the state of the button and act accordingly
 * @param ev
 */
  buttonListener(ev) {

    if (ev.buttonState === BUTTON_STATE.waiting) {
      // perform your ajax call or whatever
      const caller = Observable.of(null).delay(1500);
      caller.subscribe((e) => {
        // when async call is finished call moveToFinish
        this.morphButton.moveToFinish();
      })


    }

    if (ev.buttonState === BUTTON_STATE.done) {
      // animation in final state so handle final state for whole page
      this.taskComplete = true;

    }
  }

}



