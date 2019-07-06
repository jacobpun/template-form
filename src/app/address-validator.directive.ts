import { Address } from './data/user-settings-data';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[validateAddress]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true
    }
  ]
})
export class AddressValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    if (control && control.value) {
      const { line1, city } = control.value;
      if (city || line1) {
        if (!city) {
          return {
            city: true
          }
        }

        if (!line1) {
          return {
            line1: true
          }
        }
      }
    }
  }
  registerOnValidatorChange?(fn: () => void): void {
    //throw new Error("Method not implemented.");
  }

  constructor() { }

}
