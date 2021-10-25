import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  
  course?: Course;

  courses: Course[] = [];

  displayedColumns = ['CourseID', 'CourseName', 'Rating'];

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.service.getCourses()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
      });
  }

  

}
