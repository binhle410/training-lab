import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup-form-nested-form-groups',
  templateUrl: './signup-form-nested-form-groups.component.html',
  styleUrls: ['./signup-form-nested-form-groups.component.scss']
})
export class SignupFormNestedFormGroupsComponent implements OnInit {

  form = new FormGroup({
    account: new FormGroup({
        username: new FormControl(),
        password: new FormControl()
      }
    )
  });

  constructor() {
  }

  ngOnInit() {
  }

}
