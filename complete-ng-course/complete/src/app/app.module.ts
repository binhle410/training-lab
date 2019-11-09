import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section6Component } from './section6/section6.component';
import { ComponentsComponent } from './section6/components/components.component';
import { InputFormatDirective } from './section6/input-format.directive';
import { Section7Component } from './section7/section7.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Section8Component } from './section8/section8.component';
import {S8SignupFormComponent} from './section8/signup-form/signup-form.component';
import {S8SignupFormWithValidationComponent} from './section8/signup-form-with-validation/signup-form-with-validation.component';
import { SignupFormAsyncComponent } from './section8/signup-form-async/signup-form-async.component';
import { SignupFormNestedFormGroupsComponent } from './section8/signup-form-nested-form-groups/signup-form-nested-form-groups.component';
import { SignupFormFormArrayComponent } from './section8/signup-form-form-array/signup-form-form-array.component';
import { FormBuilderComponent } from './section8/form-builder/form-builder.component';
import { Section9Component } from './section9/section9.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './section9/posts/posts.component';
import {AppErrorHandler} from './section9/posts/app-error-handler';

import {ErrorHandler, Injectable} from '@angular/core';
import { Section10Component } from './section10/section10.component';

@NgModule({
  declarations: [
    AppComponent,
    Section6Component,
    ComponentsComponent,
    InputFormatDirective,
    Section7Component,
    Section8Component,
    S8SignupFormComponent,
    S8SignupFormWithValidationComponent,
    SignupFormAsyncComponent,
    SignupFormNestedFormGroupsComponent,
    SignupFormFormArrayComponent,
    FormBuilderComponent,
    Section9Component,
    PostsComponent,
    Section10Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
