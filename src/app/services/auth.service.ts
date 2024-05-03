import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import  {environment}  from '../config/env/config';
import { TokenStorageService } from './token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'data';

  constructor(
    private http: HttpClient,
    private sessionStorageService: TokenStorageService,
    private router: Router
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  login(data:any): Observable<any>  {
    return this.http.post(environment.apiUrl + '/user/login',data,this.httpOptions)
      // .pipe( map(res =>{
      //   /*if (res) {
      //     this.sessionStorageService.saveUser(res)
      //     this.currentUserSubject.next(res);
      //   }*/
      //   return res;

      // }))

  }

  register(data:any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/user/register',data,this.httpOptions)
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
