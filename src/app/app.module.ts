import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationsListComponent } from './formations-list/formations-list.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { CoursTradingComponent } from './cours-trading/cours-trading.component';
import { DasboardComponent } from './Admin/dasboard/dasboard.component';
import { ClassComponent } from './Admin/class/class.component';
import { ForumsComponent } from './Admin/forums/forums.component';
import { LoginComponent } from './Admin/login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { MoreInformationsComponent } from './more-informations/more-informations.component';
import { CourseComponent } from './Admin/course/course.component';
import { OneChapitreComponent } from './Admin/one-chapitre/one-chapitre.component';
import { ChapitrComponent } from './Admin/chapitr/chapitr.component';
import { EditModuleComponent } from './Admin/edit-module/edit-module.component';
import { ViewModuleListComponent } from './Admin/view-module-list/view-module-list.component';
import { StudentsListComponent } from './Admin/students-list/students-list.component';
import { ExamCorrectionComponent } from './exam-correction/exam-correction.component';
import { OneCourseViewComponent } from './Admin/one-course-view/one-course-view.component';
import { OneCourseComponent } from './Admin/one-course/one-course.component';
import { TradingOneComponent } from './formations-list/trading-one/trading-one.component';
import { TradingTwoComponent } from './formations-list/trading-two/trading-two.component';
import { TradingThreeComponent } from './formations-list/trading-three/trading-three.component';
import { TradingFourComponent } from './formations-list/trading-four/trading-four.component';
import { TradingFiveComponent } from './formations-list/trading-five/trading-five.component';
import { TradingSixComponent } from './formations-list/trading-six/trading-six.component';
import { TradingSevenComponent } from './formations-list/trading-seven/trading-seven.component';
import { TradingEightComponent } from './formations-list/trading-eight/trading-eight.component';
import { StudentComponent } from './Admin/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    FormationsComponent,
    FormationsListComponent,
    HomeComponent,
    ProfilComponent,
    LandingComponent,
    AboutComponent,
    CoursTradingComponent,
    DasboardComponent,
    ClassComponent,
    ForumsComponent,
    LoginComponent,
    RecoverPasswordComponent,
    NewPasswordComponent,
    MoreInformationsComponent,
    CourseComponent,
    OneChapitreComponent,
    ChapitrComponent,
    EditModuleComponent,
    ViewModuleListComponent,
    StudentsListComponent,
    ExamCorrectionComponent,
    OneCourseViewComponent,
    OneCourseComponent,
    TradingOneComponent,
    TradingTwoComponent,
    TradingThreeComponent,
    TradingFourComponent,
    TradingFiveComponent,
    TradingSixComponent,
    TradingSevenComponent,
    TradingEightComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
