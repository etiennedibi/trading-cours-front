import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-trading-three',
  templateUrl: './trading-three.component.html',
  styleUrls: ['./trading-three.component.scss']
})
export class TradingThreeComponent implements OnInit {
  @Input() course!: Course;

  constructor(private router: Router, private chapitreService: ChapitreService, private localStorageService: TokenStorageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
