import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[noBozos]',
    providers: [
      {
        provide: NG_VALIDATORS, useExisting: forwardRef(() => NoBozosDirective), multi: true
      }
    ]
  })
  export class NoBozosDirective  implements Validator {


  validate(c: AbstractControl): ValidationErrors {

    const invalid = {'noBozos': true};

    if (c.value) {
      const strIn: string = c.value.toString();
      if (strIn.toUpperCase().includes('BOZO')) {
        return invalid;
      }
    }

    return null;

  }

  registerOnValidatorChange?(fn: () => void): void {

  }





  }
