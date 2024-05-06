import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { ChapitreService } from '../services/chapitre.service';
import { Course } from '../models/course.models';
import { Observable } from 'rxjs';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-formations-list',
  templateUrl: './formations-list.component.html',
  styleUrls: ['./formations-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormationsListComponent implements OnInit {

  //courses: Course [] = [];
  //courses$!: Observable<Course[]>;
  course$!: Observable<Course>;

  courses: Course[] = [];
  coursesone$!: Observable<Course[]>;
  coursestwo$!: Observable<Course[]>;
  coursesthree$!: Observable<Course[]>;
  coursesfour$!: Observable<Course[]>;
  coursesfive$!: Observable<Course[]>;
  coursessix$!: Observable<Course[]>;
  coursesseven$!: Observable<Course[]>;
  courseseight$!: Observable<Course[]>;

  token:any
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private localStorageService: TokenStorageService,
    private chapitreService: ChapitreService
    ) {}

  ngOnInit(): void {
    //this.courses$ = this.chapitreService.getAllCourses()
    this.coursesone$ = this.chapitreService.getAllModuleCoursesById(5)
    this.coursestwo$ = this.chapitreService.getAllModuleCoursesById(6)
    this.coursesthree$ = this.chapitreService.getAllModuleCoursesById(7)
    this.coursesfour$ = this.chapitreService.getAllModuleCoursesById(8)
    this.coursesfive$ = this.chapitreService.getAllModuleCoursesById(9)
    this.coursessix$ = this.chapitreService.getAllModuleCoursesById(10)
    this.coursesseven$ = this.chapitreService.getAllModuleCoursesById(11)
    this.courseseight$ = this.chapitreService.getAllModuleCoursesById(12)



    $(document).ready(function () {
      $(".courses-bloc-row").css("display","none");
      $(".bloc-zero").css("display","flex");
      //CODE
      $(".btn-0").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-zero").fadeIn(200);
      });

      $(".btn-1").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-one").fadeIn(200);
      });

      $(".btn-2").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-two").fadeIn(200);
      });

      $(".btn-3").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-three").fadeIn(200);
      });

      $(".btn-4").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-four").fadeIn(200);
      });

      $(".btn-5").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-five").fadeIn(200);
      });

      $(".btn-6").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-six").fadeIn(200);
      });

      $(".btn-7").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-seven").fadeIn(200);
      });

      $(".btn-8").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-eight").fadeIn(200);
      });

      //
      $(".menuModalIcon").click(function() {
        $(".menu-blc").addClass("animate__fadeInLeft");
        $(".menu-blc").removeClass("animate__fadeOutLeft");
        $(".container-menus").fadeIn(200);
        $(".container-menus").css("display","flex");
      });

      $(".item-close-menu").click(function() {
        $(".menu-blc").removeClass("animate__fadeInLeft");
        $(".menu-blc").addClass("animate__fadeOutLeft");
        $(".container-menus").fadeOut(200);
      });


      $(".form-inline").click(function() {
        $(".session-bloc").addClass("animate__fadeInRight");
        $(".session-bloc").removeClass("animate__fadeOutRight");
        $(".container-session").fadeIn(200);
        $(".container-session").css("display","flex");
      });

      $(".item-close-session").click(function() {
        $(".session-bloc").addClass("animate__fadeOutRight");
        $(".session-bloc").removeClass("animate__fadeInRight");
        $(".container-session").fadeOut(200);
      });

    });

    this.token = this.localStorageService.getUser()
  }

  signout() {
    this.localStorageService.signOut()
    this.router.navigateByUrl('/authentification')
  }

}
