import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.models';
import { ChapitreService } from '../services/chapitre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  @Input() course!: Course;

  constructor(private router: Router, private chapitreService: ChapitreService) {}

  ngOnInit(): void {

  }
}
