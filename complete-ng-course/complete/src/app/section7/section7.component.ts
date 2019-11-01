import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.scss']
})
export class Section7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x){
    console.log('hello',x);
  }
}
