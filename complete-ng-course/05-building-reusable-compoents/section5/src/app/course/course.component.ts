import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  inputs: ['isSelected']
  // encapsulation: ViewEncapsulation.Emulated // default value
})
export class CourseComponent implements OnInit {
  icon = faStar;

  constructor() {
  }

  @Input('is-favorite') isFavorite = false;
  @Output() change = new EventEmitter();

  isSelected: boolean;

  ngOnInit() {
  }

  onClick() {
    this.change.emit();
    console.log('onClick called');
  }
}
