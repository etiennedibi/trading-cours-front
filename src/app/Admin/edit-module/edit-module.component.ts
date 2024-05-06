import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Observable, first, map } from 'rxjs';
import { Chapitre } from 'src/app/models/chapitre.models';
import { Course } from 'src/app/models/course.models';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChapitreService } from 'src/app/services/chapitre.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs'

declare var $: any;
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditModuleComponent implements OnInit {
  moduleForm!: FormGroup;
  chapitrePreview$!: Observable<Chapitre>;
  courseForm!: FormGroup;
  coursePreview$!: Observable<Course>;
  urlRegex!: RegExp;

  constructor (private formBuilder: FormBuilder,
              private chapitreService: ChapitreService,
              private http: HttpClient,
              private router: Router) {}

  ngOnInit(): void {

    //MODULE FORM VALIDATION
    this.moduleForm = this.formBuilder.group({
      ordre: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      id_formation: ['', [Validators.required]],
      id_user: ['', [Validators.required]],
    }, {
      updateOn: 'blur'
    });

    //COURSE FORM VALIDATION
    this.courseForm = this.formBuilder.group({
      titre: ['', [Validators.required]],
      resume: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
      lien_exo: ['', [Validators.required]],
      id_user: ['', [Validators.required]],
      id_module: ['', [Validators.required]],
      duree: ['', [Validators.required]],
    }, {
      updateOn: 'blur'
    });


    this.chapitrePreview$ = this.moduleForm.valueChanges.pipe(map(formValue => ({...formValue,id: 0})));
    this.coursePreview$ = this.courseForm.valueChanges.pipe(map(formValue => ({...formValue,id: 0})));

    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

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


      //FORMS INTERACTIONS
      $(".pencil-edit-module").click(function() {
        $(".container-edit-module").css("display", "flex");
        $(".module-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });
      $(".validate-form").click(function() {
        $(".module-form-edit").css("display", "none");
        $(".success-message").css("display", "block");
      });
      $(".close-edit-module").click(function() {
        $(".container-edit-module").css("display", "none");
        $(".module-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });

      //FORMS INTERACTIONS
      $(".add-course").click(function() {
        console.log($(".add-course"))
        $(".container-edit-course").css("display", "flex");
        $(".course-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });
      $(".validate-form").click(function() {
        $(".course-form-edit").css("display", "none");
        $(".success-message").css("display", "block");
      });
      $(".close-edit").click(function() {
        $(".container-edit-course").css("display", "none");
        $(".course-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });

    });
  }

  resetTheForm(): void {
    this.moduleForm.reset();
  }

  onSubmitModuleForm() {
    this.chapitreService.addChapitre(this.moduleForm.value).pipe(
      tap(() => this.router.navigateByUrl('/boards/modules/edit'))
    ).subscribe();
    //this.resetTheForm();
  }


  onSubmitcourseForm() {
    this.chapitreService.addCourse(this.courseForm.value).pipe(
      tap(() => this.router.navigateByUrl('/boards/modules/edit'))
    ).subscribe()
    this.resetTheForm();
  }

}
