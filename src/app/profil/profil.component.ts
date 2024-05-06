import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import { TokenStorageService } from '../services/token-storage.service';
import { first } from 'rxjs';
import { ProfilService } from '../services/profil.service';
import  {environment}  from '../config/env/config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoreUserInfoService } from '../services/more-user-info.service';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilComponent implements OnInit {

  // For profil
  profil: any={}
  profilPath: string = ''
  apiUrl = environment.apiUrl

  // For setting
  nameForm!: FormGroup;
  phoneForm!: FormGroup;
  passwordForm!: FormGroup;
  file: any = null;

  // For Activation
  isActive = 0

  constructor (
    private router: Router,
    private localStorageService: TokenStorageService,
    private profils: ProfilService,
    private moreUserInfoService: MoreUserInfoService,

    public fb: FormBuilder,
    ) {
      this.nameForm = this.fb.group({
        nom_complet:['',Validators.required],
        the_user_id: this.localStorageService.getUser(),
      });
      this.phoneForm = this.fb.group({
        telephone:['',Validators.required],
        the_user_id: this.localStorageService.getUser(),
      });
      this.passwordForm = this.fb.group({
        password:['',Validators.required],
        the_user_id: this.localStorageService.getUser(),
      });
    }

  ngOnInit(): void {
    $(document).ready(function () {

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

      // INTERACTIONS DES ITEMS DU MENU PROFIL
      $(".item-1").click(function() {
        $(".item-1").css("font-size", "1.5rem");
        $(".item-2").css("font-size", "");
        $(".item-3").css("font-size", "");
        $(".container-view-row-mes-cours").fadeIn(200);
        $(".container-view-row-forums").css("display", "none");
        $(".container-view-row-parametres").css("display", "none");
      });
      $(".item-2").click(function() {
        $(".item-2").css("font-size", "1.5rem");
        $(".item-3").css("font-size", "");
        $(".item-1").css("font-size", "");
        $(".container-view-row-forums").fadeIn(200);
        $(".container-view-row-mes-cours").css("display", "none");
        $(".container-view-row-parametres").css("display", "none");
      });
      $(".item-3").click(function() {
        $(".item-3").css("font-size", "1.5rem");
        $(".item-2").css("font-size", "");
        $(".item-1").css("font-size", "");
        $(".container-view-row-parametres").fadeIn(200);
        $(".container-view-row-forums").css("display", "none");
        $(".container-view-row-mes-cours").css("display", "none");
      });

      //POPUP MODIFICATION INPUT
      // $(".btn-edit").click(function() {
      //   $(".cont-confirmation-popup").css("display", "flex");
      //   $(".request-bloc").css("display", "block");
      //   $(".success-message").css("display", "none");
      // });
      // $(".btn-accept").click(function() {
      //   $(".btn-accept").css("display", "none");
      //   $(".success-message").css("display", "block");
      // });
      // $(".close-popup-edit").click(function() {
      //   $(".cont-confirmation-popup").css("display", "");
      //   $(".btn-accept").css("display", "");
      //   $(".success-message").css("display", "");
      // });

      //POPUP NOTIFICATIONS
      $(".div-notifs").click(function() {
        $(".cont-notifications-popup").css("display", "flex");
      });
      $(".cont-notifications-popup").click(function() {
        $(".cont-notifications-popup").css("display", "none");
      });
    })

    this.GetProfilInfol(this.localStorageService.getUser())
  }


  signout() {
    this.localStorageService.signOut()
    this.router.navigateByUrl('/authentification')
  }

  GetProfilInfol(userId:any) {
    // console.log(userId);
    this.profils.getUserProfilInfo(userId)
      .pipe(first())
        .subscribe((response:any) => {
            this.profil = response.userInfos
            this.profilPath = response.userAvatarPath
        })

  }

  submitUpdateProfilName() {
    this.moreUserInfoService.PostMoreInfo(this.nameForm.value)
      .pipe(first())
      .subscribe(
        (response) =>{
          if (response.code == 200 ) {
            this.nameForm.reset()
            this.GetProfilInfol(this.localStorageService.getUser())
          } else {
            console.log(response.error);
          }

      })
  }
  submitUpdateProfilPhone() {
    this.moreUserInfoService.PostMoreInfo(this.phoneForm.value)
      .pipe(first())
      .subscribe(
        (response) =>{
          if (response.code == 200 ) {
            this.phoneForm.reset()
            this.GetProfilInfol(this.localStorageService.getUser())
          } else {
            console.log(response.error);
          }

      })
     ;
  }
  submitUpdateProfilPassword() {
    this.moreUserInfoService.PostMoreInfo(this.passwordForm.value)
      .pipe(first())
      .subscribe(
        (response) =>{
          if (response.code == 200 ) {
            this.passwordForm.reset()
            this.GetProfilInfol(this.localStorageService.getUser())
          } else {
            console.log(response.error);
          }

      })
     ;
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0]

  }
  submitUpdateProfilAvatar() {
    let formData = new FormData();
    formData.append('avatar', this.file)
    console.log(formData);

    this.moreUserInfoService.PostMoreInfo(formData)
      .pipe(first())
      .subscribe(
        (response) =>{
          if (response.code == 200 ) {
            this.file = null
            this.GetProfilInfol(this.localStorageService.getUser())
          } else {
            console.log(response.error);
          }

      })
     ;
  }

}
