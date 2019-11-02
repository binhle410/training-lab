import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.scss']
})
export class Section7Component implements OnInit {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('form', form, form.value);
  }

  log(x){
    console.log('hello',x);
  }
}
