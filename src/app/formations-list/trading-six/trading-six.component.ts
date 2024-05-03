import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-trading-six',
  templateUrl: './trading-six.component.html',
  styleUrls: ['./trading-six.component.scss']
})
export class TradingSixComponent implements OnInit {
  @Input() course!: Course;

  constructor(private router: Router, private chapitreService: ChapitreService, private localStorageService: TokenStorageService, private route: ActivatedRoute) {}

  ngOnInit(): void {

  }
}
