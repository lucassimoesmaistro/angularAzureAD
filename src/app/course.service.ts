import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';

import { protectedResources } from './auth-config';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = protectedResources.courseListApi.endpoint;

  constructor(private http: HttpClient) { }

  getCourses() { 
    return this.http.get<Course[]>(this.url);
  }

}
