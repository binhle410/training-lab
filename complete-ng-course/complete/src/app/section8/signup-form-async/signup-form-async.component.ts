import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameAsyncValidators} from './username.validators';

@Component({
  selector: 'app-signup-form-async',
  templateUrl: './signup-form-async.component.html',
  styleUrls: ['./signup-form-async.component.scss']
})
export class SignupFormAsyncComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [],
      [
        UsernameAsyncValidators.shouldBeUnique
      ]),
    password: new FormControl()
  });

  constructor() {
  }

  ngOnInit() {
  }

  login() {
    const isValid = true;
    console.log('this.form.value', this.form.value);
    this.form.setErrors({invalidLogin: true});

  }

  get username() {
    return this.form.get('username');
  }
}
