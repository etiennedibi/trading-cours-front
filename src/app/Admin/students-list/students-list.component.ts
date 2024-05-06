import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';
declare var $: any;

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentsListComponent implements OnInit {

  user$!: Observable<User>;

  users: User [] = [];
  users$!: Observable<User[]>;

  constructor(private route: ActivatedRoute, private router: Router, private  http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
  }
}
