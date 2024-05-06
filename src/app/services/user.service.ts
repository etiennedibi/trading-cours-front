import { User } from "../models/user.models";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../config/env/config";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor (private http: HttpClient) {}

  users: User [] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };



  //ALL GET METHOD
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/user/all_user');
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(environment.apiUrl + `/user/show_user/${userId}`)
  }
}


