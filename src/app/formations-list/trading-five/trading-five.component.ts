import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-trading-five',
  templateUrl: './trading-five.component.html',
  styleUrls: ['./trading-five.component.scss']
})
export class TradingFiveComponent implements OnInit {
  @Input() course!: Course;

  constructor(private router: Router, private chapitreService: ChapitreService, private localStorageService: TokenStorageService, private route: ActivatedRoute) {}

  ngOnInit(): void {

  }

}
