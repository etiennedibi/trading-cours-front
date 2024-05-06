import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
declare var $: any;

@Component({
  selector: 'app-trading-one',
  templateUrl: './trading-one.component.html',
  styleUrls: ['./trading-one.component.scss']
})
export class TradingOneComponent implements OnInit {
  @Input() course!: Course;

  constructor(private router: Router, private chapitreService: ChapitreService, private localStorageService: TokenStorageService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    $(document).ready(function () {
      //APERÇU DES VIDEOS
      $(".views").click(function() {
        $(".view").css("display", "flex");
        $(".view").fadeIn(200);
      });
      $(".close-view").click(function() {
        $(".view").fadeOut(200);
      });
    })

  }
}
