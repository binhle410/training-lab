import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  // encapsulation: ViewEncapsulation.Emulated // default value
})
export class CourseComponent implements OnInit {
  icon = faStar;

  constructor() {
  }

  @Input('is-favorite') isFavorite = false;
  @Output() change = new EventEmitter();

  @Input() isSelected: boolean;

  ngOnInit() {
  }

  onIconClick() {
    this.change.emit({newValue: this.isSelected});
    console.log('onClick called');
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
