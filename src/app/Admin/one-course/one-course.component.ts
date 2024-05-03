import { Component, OnInit, Input } from '@angular/core';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.models';

@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.scss']
})
export class OneCourseComponent implements OnInit {

  @Input() course!: Course;


  constructor (private chapitreService: ChapitreService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {

  }

  onViewCourse() {
    this.router.navigateByUrl(`course/${this.course.id}`)
    console.log(this.course.id)
  }
}
