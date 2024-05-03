import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-course-view',
  templateUrl: './one-course-view.component.html',
  styleUrls: ['./one-course-view.component.scss']
})
export class OneCourseViewComponent implements OnInit {

  course!: Course;
  course$!: Observable<Course>;

  constructor(private chapitreService: ChapitreService,
              private route: ActivatedRoute,
              private router: Router) {}

    ngOnInit(): void {
      const course = this.course.id;
      this.course$ = this.chapitreService.getCourseById(course);
      console.log(this.course$)
    }
}
