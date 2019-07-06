import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscriptionValidatorDirective } from './subscription-validator.directive';
import { AddressComponent } from './address/address.component';
import { AddressValidatorDirective } from './address-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    SubscriptionValidatorDirective,
    AddressComponent,
    AddressValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
