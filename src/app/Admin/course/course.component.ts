import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Observable, first, map } from 'rxjs';
import { Chapitre } from 'src/app/models/chapitre.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';


declare var $: any;
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseComponent implements OnInit {


  constructor (private formBuilder: FormBuilder,
              private chapitreService: ChapitreService,
              private router: Router) {}

  ngOnInit(): void {


    /*this.courseForm = this.formBuilder.group({
      titre: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      resume: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      video: [null, [Validators.required]],
      lien_exo: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      id_user: [null, [Validators.required, Validators.maxLength(1)]],
      id_module: [null, [Validators.required, Validators.maxLength(1)]],
      duree: [null, [Validators.required, Validators.maxLength(8)]],
    }, {
      updateOn: 'blur'
    });*/


    $(document).ready(function () {

      $(".swiper-items").css("display", "block");

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
