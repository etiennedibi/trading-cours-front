import { Component, OnInit, Input } from '@angular/core';
import { Chapitre } from 'src/app/models/chapitre.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.models';
declare var $: any;

@Component({
  selector: 'app-one-chapitre',
  templateUrl: './one-chapitre.component.html',
  styleUrls: ['./one-chapitre.component.scss']
})
export class OneChapitreComponent implements OnInit {

  chapitre!: Chapitre;
  chapitre$!: Observable<Chapitre>;

  course$!: Observable<Course>;

  courses: Course[] = [];
  courses$!: Observable<Course[]>;

  constructor(private chapitreService: ChapitreService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {

    const chapitreId = +this.route.snapshot.params['id'];
    this.chapitre$ = this.chapitreService.getChapitreById(chapitreId);

    this.courses$ = this.chapitreService.getAllModuleCoursesById(chapitreId)


    $(document).ready(function () {

      //POPUP AND HORIZONTAL MENU
      $(".bi-x-lg").click(function() {
        $(".cover-bloc").css("display", "none");
        $(".popup-menu-social").css("display", "none");
      });
      $(".btn-grid").click(function() {
        $(".cover-bloc").css("display", "flex");
        $(".popup-complet-profil").css("display", "none");
        $(".popup-menu-social").css("display", "flex");
      });

    });
  }


}
