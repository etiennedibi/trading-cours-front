import { Component, OnInit, Input } from '@angular/core';
import { Chapitre } from 'src/app/models/chapitre.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.models';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-one-chapitre',
  templateUrl: './one-chapitre.component.html',
  styleUrls: ['./one-chapitre.component.scss']
})
export class OneChapitreComponent implements OnInit {
  editModuleForm!: FormGroup;
  editCourseForm!: FormGroup;

  chapitre!: Chapitre;
  chapitre$!: Observable<Chapitre>;
  chapitreDelete$!: Observable<Chapitre>

  course$!: Observable<Course>;

  courses: Course[] = [];
  courses$!: Observable<Course[]>;

  constructor(private chapitreService: ChapitreService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit(): void {

    /*MODULE FORM VALIDATION
    this.editModuleForm = this.formBuilder.group({
      ordre: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      id_formation: ['', [Validators.required]],
      id_user: ['', [Validators.required]],
    }, {
      updateOn: 'blur'
    });*/

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

      /*FORMS INTERACTIONS
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
      });*/

    });
  }

  onDeleteChapitreById() {
    const chapitreId = +this.route.snapshot.params['id'];
    this.chapitreDelete$ = this.chapitreService.deleteChapitreById(chapitreId)
  }

  /*onModifChapitreFormById() {
    this.chapitreService.updateChapitreById(this.editModuleForm.value).pipe(
      tap(() => this.router.navigateByUrl(`boards/modules/view/${this.chapitre.id}`))
    ).subscribe();
  }*/

}
