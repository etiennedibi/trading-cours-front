import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TokenStorageService } from '../services/token-storage.service';
import { first } from 'rxjs';
import { AuthService } from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  submitted_signin:boolean = false;
  submitted_register:boolean = false;

  sended_register:boolean = false
  sended_signin:boolean = false

  register_faild:boolean = false
  signin_faild:boolean = false

  errorMessage:any = ''

  signinForm!: FormGroup;
  registerForm!: FormGroup;

  loading:boolean = false
  user = {
    nom_complet: '',
    telephone: '',
    password: '',
    password_confirmation: '',
  }
  constructor (
    private router: Router,
    public fb: FormBuilder,
    private authService:AuthService,
    // private http:HttpClient,
    private localStorageService: TokenStorageService
    ) {

      this.signinForm = this.fb.group({
        telephone:['',Validators.required],
        password:['',Validators.required]

      });

      this.registerForm = this.fb.group({
        nom_complet:['',Validators.required],
        telephone:['',Validators.required ],
        password:['',Validators.required],
        password_confirmation:['',Validators.required]

      });
    }

    // convenience getter for easy access to form fields
    get f_signin() { return this.signinForm.controls; }
    get f_register() { return this.registerForm.controls; }

  ngOnInit(): void {
    //CODE
    $(".btn-creation").click(function() {
      $(".connexion-bloc").css("display","none");
      $(".inscription-bloc").fadeIn(200);
    });
    $(".btn-connexion").click(function() {
      $(".inscription-bloc").css("display","none");
      $(".connexion-bloc").fadeIn(200);
    });
  }


  submitsigninForm() {
    this.submitted_signin = true

    // stop here if form is invalid
    if (this.signinForm.invalid) {
        this.sended_signin = false
        return;
    }
    this.authService.login(this.signinForm.value)
      .pipe(first())
      .subscribe(response =>{

        if (response.status == "ok") {
          console.log("log-in");

          this.sended_signin = true
          this.loading = false
          this.signin_faild = false

          this.localStorageService.saveRecovery(response.token.token)
          this.localStorageService.saveUser(response.userInfos.id)
          this.localStorageService.saveUserActivation(response.userInfos.is_active)

          this.loading = false

          setTimeout(() => {
            this.router.navigateByUrl('/profil')
          }, 1000)

        } else {
          this.sended_signin = false
          this.signin_faild = true

          this.errorMessage = response.error
          this.loading = false

        }

      })

  }


  submitregisterForm() {

    this.submitted_register = true

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.sended_register = false
      //this.register_faild = true
      return;
    }

    this.authService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (response) =>{

          if (response.code == 200 ) {
            console.log("connected");
            this.sended_register = true
            this.register_faild = false

            this.localStorageService.saveRecovery(response.token.token)
            this.localStorageService.saveUser(response.newUsers.id)

            setTimeout(() => {
              this.router.navigateByUrl('/more')
              // this.router.navigate(['AddEmployee']);
            }, 1000)

          } else {
            this.sended_register = false
            this.register_faild = true

            this.errorMessage = response.error
            this.loading = false

          }

      })

     ;
  }
}
