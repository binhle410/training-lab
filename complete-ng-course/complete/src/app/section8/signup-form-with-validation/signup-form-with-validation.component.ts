import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  selector: 'app-s8-signup-form.validation',
  templateUrl: './signup-form-with-validation.component.html',
  styleUrls: ['./signup-form-with-validation.component.css']
})
export class S8SignupFormWithValidationComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl()
  });

  get username() {
    return this.form.get('username');
  }
}
