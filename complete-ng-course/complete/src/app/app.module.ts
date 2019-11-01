import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section6Component } from './section6/section6.component';
import { ComponentsComponent } from './section6/components/components.component';
import { InputFormatDirective } from './section6/input-format.directive';
import { Section7Component } from './section7/section7.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Section6Component,
    ComponentsComponent,
    InputFormatDirective,
    Section7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
