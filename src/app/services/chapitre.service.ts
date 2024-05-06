import { Course } from './../models/course.models';
import { Injectable, Input } from "@angular/core";
import { Chapitre } from "../models/chapitre.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { environment } from "../config/env/config";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class ChapitreService {

  constructor (private http: HttpClient) {}

  chapitres: Chapitre [] = [];
  courses: Course [] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };



  //ALL METHODS OF MODULES
  getAllChapitres(): Observable<Chapitre[]> {
    return this.http.get<Chapitre[]>(environment.apiUrl + '/all_module/1');
  }

  getChapitreById(chapitreId: number): Observable<Chapitre> {
    return this.http.get<Chapitre>(environment.apiUrl + `/module/${chapitreId}`)
  }

  /*updateChapitreById(chapitreId: number): Observable<Chapitre> {
    return this.http.put<Chapitre>(environment.apiUrl + `/update_module/${chapitreId}`)
  }*/

  addChapitre(formValue: {ordre: number, titre: string, description: string, id_formation: number, id_user: number}): Observable<Chapitre> {

    return this.getAllChapitres().pipe(
      map(chapitres => [...chapitres].sort((a,b) => a.id - b.id)),
      map(sortedChapitres => sortedChapitres[sortedChapitres.length - 1]),
      map(previousChapitre => ({
        ...formValue,
        id: previousChapitre.id + 1
      })),
      switchMap(newChapitre => this.http.post<Chapitre>(environment.apiUrl + '/add_module', newChapitre)
      )
    )
    //return this.http.post<Chapitre>(environment.apiUrl + '/add_module', formValue, this.httpOptions);
  }

  deleteChapitreById(chapitreId: number): Observable<Chapitre> {
    return this.http.delete<Chapitre>(environment.apiUrl + `/module/${chapitreId}`)
  }

  //ALL METHODS OF COURSES
  getAllModuleCoursesById(chapitreId: number): Observable<Course[]> {
    return this.http.get<Course[]>(environment.apiUrl + `/all_cours/${chapitreId}`)
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(environment.apiUrl + '/all_trading_cours');
  }

  getCourseById(courseId: number): Observable<Course> {
    console.log(courseId)
    return this.http.get<Course>(environment.apiUrl + `/cours/${courseId}`)
  }

  addCourse(formValue: {titre: string, resume: string, lien_exo: string, id_user: number, id_module: number, duree: string}): Observable<Course> {
    return this.http.post<Course>(environment.apiUrl + '/add_cours',formValue,this.httpOptions)
  }


}
