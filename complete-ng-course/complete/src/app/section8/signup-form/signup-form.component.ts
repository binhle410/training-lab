import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-s8-signup-form.creating-controls',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class S8SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
}
