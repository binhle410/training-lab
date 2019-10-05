import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CoursesService {
    getCourses(): string[] {
        return ['Laravel','React', 'Angular', 'Shakespeare', 'Symfony', "Java Spring"];
    }
}