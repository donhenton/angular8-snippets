
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { MorphButtonComponent } from 'app/components/morph-button/morph-button.component';
import { trigger, style, transition, animate, group, state } from '@angular/animations';

@Component({
  selector: 'app-morph-buttons-page',
  templateUrl: './morph-buttons-page.component.html',
  styleUrls: ['./morph-buttons-page.component.scss']
})

export class MorphButtonsPageComponent implements OnInit {


  animateChoices = {choice: 'basic'};

  // @ViewChild('morphButton') morphButton: MorphButtonComponent;
  constructor() {

   }

  ngOnInit() {
  }

  chooseAnimation(anim) {
    // click action for radios, occurs before the ngModel value set
   // console.log(`anim ${anim} choices ${this.animateChoices.choice}`)

  }


}


@Component({
  selector: 'app-animbox',
  template: `<div [@changeState]="currentState" class="mybox"></div>`,
  styleUrls: ['./morph-buttons-page.component.scss'],
  animations: [
    trigger('changeState', [

        state('basic', style(
          {
            backgroundColor: '#440000',
            transform: 'scale(.4)'
          }
        )),
        state('original', style(
          {
            backgroundColor: '#47748f',
            transform: 'scale(1)'
          }
        )),
        state('delay', style(
          {
            backgroundColor: 'red',
            transform: 'scale(.5)',
            borderRadius: '75px'
          }
        )),
        state('easing', style(
          {
            backgroundColor: 'green',
            transform: 'scale(1)',

          }
        )),

       // transition('original => basic, easing => basic, delay => basic', animate('800ms')),
        transition('* => original', animate('200ms')),
        transition('* => basic', animate('200ms')),
        transition('* => delay', animate('400ms 1000ms ease-out')),
        transition('* => easing', animate('700ms ease-in-out'))


    ])




  ]
})
export class AnimboxComponent implements OnInit {

  @Input() currentState ;
  @Output() eventItem = new EventEmitter<string>();
  private counter = 0;
  ngOnInit(): void {

  }


}

