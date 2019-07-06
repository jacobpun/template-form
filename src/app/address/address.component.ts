import { Address } from './../data/user-settings-data';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlContainer, NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent)
    }
  ]
})
export class AddressComponent implements OnInit, ControlValueAccessor {
  @Input() errors: any;
  
  address: Address = {};
  disabled: boolean;
  onChange: (address: Address) => void;
  onTouched: () => void;
  addrressChange$: Subject<void> = new Subject();

  constructor() { }

  ngOnInit() {
    this.addrressChange$.subscribe(() => this.onChange(this.address));
  }

  writeValue(address: Address): void {
    this.address = { ...address };
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}