import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {
  courses = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'React'}
  ];

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };

  taskWithNoAssignee = {
    title: 'Review applications',
    assignee: null
  };

  isSelected = true;

  viewMode = 'default';

  constructor() {
  }

  ngOnInit() {
  }

  toggleSelection() {
    this.isSelected = !this.isSelected;
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'Angular'},
      {id: 2, name: 'React'},
      {id: 3, name: 'PHP'},
      {id: 5, name: 'Java'},
      {id: 6, name: 'Course 6'},
      {id: 7, name: 'Course 7'},
      {id: 8, name: 'Course 8'},
      {id: 9, name: 'Course 9'},
      {id: 10, name: 'Course 10'},
      {id: 11, name: 'Hello 11'},
      {id: 12, name: 'Hello 12'}
    ];
  }

  onClick() {
    if (this.courses.length > 0) {
      this.courses = [];
    } else {
      this.courses = [
        {id: 1, name: 'Angular'},
        {id: 2, name: 'React'},
        {id: 3, name: 'PHP'},
        {id: 4, name: 'Java'}
      ];
    }
  }

  addCourse() {
    this.courses.push({id: 5, name: 'Java Spring Framework'});
  }

  removeCourse(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
