import { LoginComponent } from './Admin/login/login.component';
import { ForumsComponent } from './Admin/forums/forums.component';
import { ClassComponent } from './Admin/class/class.component';
import { DasboardComponent } from './Admin/dasboard/dasboard.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { FormationsListComponent } from './formations-list/formations-list.component';
import { FormationsComponent } from './formations/formations.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursTradingComponent } from './cours-trading/cours-trading.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { MoreInformationsComponent } from './more-informations/more-informations.component';
import { AuthGuard } from './_helpers/auth.guard';
import { CourseComponent } from './Admin/course/course.component';
import { EditModuleComponent } from './Admin/edit-module/edit-module.component';
import { ViewModuleListComponent } from './Admin/view-module-list/view-module-list.component';
import { OneChapitreComponent } from './Admin/one-chapitre/one-chapitre.component';
import { StudentsListComponent } from './Admin/students-list/students-list.component';
import { ExamCorrectionComponent } from './exam-correction/exam-correction.component';
import { OneCourseViewComponent } from './Admin/one-course-view/one-course-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formations', component: FormationsComponent},
  { path: 'formations/liste', component: FormationsListComponent },
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'recovery', component: RecoverPasswordComponent },
  { path: 'recovery/new-password', component: NewPasswordComponent },
  { path: 'more', component: MoreInformationsComponent },
  { path: 'trading/cours', component: CoursTradingComponent },
  //LES PAGES D'ADMINISTRATION
  { path: 'boards', component: LoginComponent },
  { path: 'boards/home', component: DasboardComponent },
  //{ path: 'boards/courses', component: CoursesComponent },
  { path: 'boards/modules', component: CourseComponent },
  { path: 'boards/modules/edit', component: EditModuleComponent },
  { path: 'boards/modules/view', component: ViewModuleListComponent },
  { path: 'boards/modules/view/:id', component: OneChapitreComponent },
  //{ path: 'course/:id', component: OneCourseViewComponent },
  { path: 'boards/class', component: ClassComponent },
  { path: 'boards/class/students', component: StudentsListComponent },
  { path: 'boards/class/exams', component: ExamCorrectionComponent },
  { path: 'boards/forums', component: ForumsComponent },
  { path: 'boards/login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
