import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup-form-form-array',
  templateUrl: './signup-form-form-array.component.html',
  styleUrls: ['./signup-form-form-array.component.scss']
})
export class SignupFormFormArrayComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
    }
  );

  constructor() {
  }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).insert(0, new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
