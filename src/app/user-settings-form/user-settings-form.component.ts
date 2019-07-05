import { UserSettings } from './../data/user-settings-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: UserSettings = {
    name: null,
    specialOffers: true,
    uiStyle: 'medium',
    subscriptionType: 'M',
    notes: 'some notes goes here ...',
    student: 'Student',
    startDate: new Date(),
  };
  constructor() { }

  ngOnInit() {
  }

}
