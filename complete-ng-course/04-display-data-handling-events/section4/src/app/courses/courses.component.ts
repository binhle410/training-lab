import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventBublingDisabled = false;
  email = 'me@example.com';
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }

  toggleEventBubling(){
    this.eventBublingDisabled = !this.eventBublingDisabled;
  }

  onKeyUpEnter($event?, email?, input?){
    console.log(this.email, $event.target.value, email, input);
  }

  onDivClick(){
    console.log('... div was clicked')
  }

  onSave($event){
    if(this.eventBublingDisabled){
      $event.stopPropagation();
    }
    console.log('... ... Button was clicked', $event)
  }
}
