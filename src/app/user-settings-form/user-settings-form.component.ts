import { UserSettings } from './../data/user-settings-data';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  @ViewChild('nameField', { read: NgControl }) name: NgControl;

  private destroy$: Subject<boolean> = new Subject();;

  userSettings: UserSettings = {
    name: null,
    specialOffers: true,
    uiStyle: 'medium',
    subscriptionType: 'M',
    notes: 'some notes goes here ...',
    student: 'Student',
    startDate: new Date(),
    address: {
      line1: '4',
      line2: 'Byfield Circle',
      city: 'Nashua',
    },
  };

  ngOnInit() {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(console.log);
    this.name.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(name => console.log(`name: ${name}`));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  getAddressError(error) : string {
    if(error['line1']) {
      return 'Line 1 is required'
    }
    if(error['city']) {
      return 'City is required'
    }
  }
}