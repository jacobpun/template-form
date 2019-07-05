import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[subscriptionStartDate][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SubscriptionValidatorDirective,
      multi: true
    }
  ]
})
export class SubscriptionValidatorDirective implements Validator, OnChanges {
  private _onChange: () => void;
  @Input("subscriptionStartDate") startDate: Date;

  registerOnValidatorChange?(fn: () => void): void {
    this._onChange = fn;
  }

  validate(control: AbstractControl): ValidationErrors {
    const value = control ? control.value : null;
    if (this.startDate) {
      if (this.startDate.getFullYear() < 2000 && value === 'M') {
        return {
          'invalid': `Subsctiption type ${value} is not available before year 2000`
        }
      }
    }
    return null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._onChange();
  }
}
