import { Directive, Input, ElementRef, HostListener } from '@angular/core';

// https://stackoverflow.com/questions/41465542/angular2-input-field-to-accept-only-numbers/41479077
// <input appOnlyNumber  />
@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  regexStr = '^[0-9]*$';
  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event) {

    const e = <KeyboardEvent> event;
        console.log(`keyboard ${e.keyCode} ${e.ctrlKey} ${e.metaKey}`)

        const cutKey = (e.ctrlKey === true || e.metaKey === true); // handle MAC

        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A or Meta A
        (e.keyCode === 65 && cutKey === true) ||
        // Allow: Ctrl+C or Meta C
        (e.keyCode === 67 && cutKey === true) ||
        // Allow: Ctrl+V or Meta V
        (e.keyCode === 86 && cutKey === true) ||
        // Allow: Ctrl+X or Meta X
        (e.keyCode === 88 && cutKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
      const ch = String.fromCharCode(e.keyCode);
      const regEx =  new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else {
         e.preventDefault();
      }

  }
}
