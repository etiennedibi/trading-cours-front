import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';
import { MoreUserInfoService } from 'src/app/services/more-user-info.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() user!: User;
  user$!: Observable<User>;

  constructor(private router: Router, private userService: UserService, private moreUserService: MoreUserInfoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = this.user.id;
    this.user$ = this.userService.getUserById(userId)
  }
}
