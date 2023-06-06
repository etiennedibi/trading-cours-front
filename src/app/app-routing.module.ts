import { LoginComponent } from './Admin/login/login.component';
import { ForumsComponent } from './Admin/forums/forums.component';
import { ClassComponent } from './Admin/class/class.component';
import { CoursesComponent } from './Admin/courses/courses.component';
import { DasboardComponent } from './Admin/dasboard/dasboard.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
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
  { path: 'boards/courses', component: CoursesComponent },
  { path: 'boards/class', component: ClassComponent },
  { path: 'boards/forums', component: ForumsComponent },
  { path: 'boards/login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
